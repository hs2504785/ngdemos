import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeFlattener } from '@angular/material/tree';
import { changeProps } from 'find-and';
import { FileNode, FlatTreeNode } from '../models/data-source.interface';
import { DataSourceEntityService } from './data-source-entity.service';

@Injectable()
export class DataSourceHelperService {
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  expandedNodes = new Set();
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<FlatTreeNode, FileNode>();
  constructor(private dataSourceService: DataSourceEntityService) {}

  toggleExpandedNodes(treeControl, expandedObj, removed = false) {
    let expandKey = expandedObj.id || expandedObj.name;

    if (removed) {
      this.expandedNodes.delete(expandKey);
    } else {
      this.expandedNodes.add(expandKey);
    }
  }

  restoreExpandedNodes(treeControl) {
    this.expandedNodes.forEach((nodeKey: string) => {
      const foundNode = treeControl.dataNodes.find(
        (n) => (n['id'] || n['name']) === nodeKey
      );
      treeControl.expand(foundNode);
    });
  }

  /**
   * Iterate over each node in reverse order and return the first node that has a lower level than the passed node.
   */
  getParent(node: FlatTreeNode) {
    const { treeControl } = this;
    const currentLevel = treeControl.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];

      if (treeControl.getLevel(currentNode) === 0) {
        return currentNode;
      }
    }
  }

  updateNode(flatNode, nodeToBeUpdated) {
    const parentFlatNode: any = this.getParent(flatNode);
    // const currentNode = this.dsHelperService.flatNodeMap.get(node);
    // this.editNodeChange.emit(node);

    const rootNode = this.flatNodeMap.get(parentFlatNode);

    this.dataSourceService.getOne(rootNode.id).subscribe((rootNode) => {
      const updatedRoot = changeProps(
        rootNode,
        { name: flatNode.name },
        nodeToBeUpdated
      );
      this.dataSourceService.updateOne(updatedRoot);
    });
  }
}

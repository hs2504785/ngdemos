import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { files } from './example-data';
import { DataSourceEntityService } from '../services/data-source-entity.service';
import { Observable } from 'rxjs';
import { FileNode, FlatTreeNode } from '../models/data-source.interface';
import { DataSourceHelperService } from '../services/data-source-helper.service';
import { removeObject } from 'src/app/shared/modules/find-and';

@Component({
  selector: 'lib-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrls: ['./data-source-list.component.css'],
})
export class DataSourceListComponent implements OnInit {
  @Output() editNodeChange = new EventEmitter();
  @Output() addNodeChange = new EventEmitter();
  activeNode = null;
  expandedNodes: any;
  dataSources$: Observable<any>;
  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  constructor(
    private dataSourceService: DataSourceEntityService,
    private dsHelperService: DataSourceHelperService,
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,
    );

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener,
    );

    // update service flattener
    this.dsHelperService.treeFlattener = this.treeFlattener;
    this.dsHelperService.treeControl = this.treeControl;
  }

  ngOnInit() {
    this.initializeData();
    this.handleExpandedNodes();
  }

  editNode(node) {
    this.editNodeChange.emit(node);
  }

  initializeData() {
    this.dataSourceService.addManyToCache(files);

    this.dataSources$ = this.dataSourceService.entities$;

    this.dataSources$.subscribe(res => {
      this.dataSource.data = res;
      this.dsHelperService.restoreExpandedNodes(this.treeControl);
    });
  }

  /** Transform the data to something the tree can read. */
  transformer = (node: FileNode, level: number): FlatTreeNode => {
    const flatNode = {
      ...(node.id && { id: node.id }),
      name: node.name,
      type: node.type,
      level,
      expandable: !!node.children,
    };

    this.dsHelperService.flatNodeMap.set(flatNode, node);

    return flatNode;
  };

  /** Get the level of the node */
  getLevel(node: FlatTreeNode): number {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode): boolean {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatTreeNode): boolean {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }

  handleExpandedNodes() {
    this.treeControl.expansionModel.changed.subscribe(res => {
      if (res.added[0] && res.added.length) {
        this.dsHelperService.toggleExpandedNodes(
          this.treeControl,
          res.added[0],
        );
      } else if (res.removed.length) {
        res.removed.forEach(item => {
          this.dsHelperService.toggleExpandedNodes(
            this.treeControl,
            item,
            true,
          );
        });
      }
    });
  }

  deleteNode(node) {
    const parentFlatNode: any = this.dsHelperService.getParent(node);
    const parentNode = this.dsHelperService.flatNodeMap.get(parentFlatNode);

    this.dataSourceService.getOne(parentNode.id).subscribe(rootNode => {
      const updatedRoot = removeObject(rootNode, { name: node.name });
      this.dataSourceService.updateOne(updatedRoot);
    });
  }

  addNode(node) {
    this.addNodeChange.emit(node);
  }
}

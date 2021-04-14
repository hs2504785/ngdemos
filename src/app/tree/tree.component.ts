import { Component, OnInit } from '@angular/core';
import { DataSourceEntityService } from 'projects/data-source/src/public-api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  constructor(private dataSourceService: DataSourceEntityService) {}

  ngOnInit(): void {
    // console.log(this.dataSourceService);
  }

  addOne() {
    const startTask = {
      id: 'TESTID',
      name: 'Test',
      type: 'folder',
      children: [
        {
          name: 'src',
          type: 'folder',
          children: [
            {
              name: 'cdk',
              type: 'folder',
              children: [
                { name: 'package.json', type: 'file' },
                { name: 'BUILD.bazel', type: 'file' },
              ],
            },
            { name: 'material', type: 'folder' },
          ],
        },
      ],
    };

    this.dataSourceService.addOneToCache(startTask);
  }
}

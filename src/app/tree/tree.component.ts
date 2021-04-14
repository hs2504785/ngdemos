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

    this.dataSourceService.addOne(startTask);
  }

  addMany() {
    const startTask = [
      {
        id: 'TESTIDMANY',
        name: 'Test add many',
        type: 'folder',
        children: [
          {
            name: 'src many',
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
      },
      {
        id: 'componentsIDMANY',
        name: 'components many 2',
        type: 'folder',
        children: [
          {
            name: 'components 2',
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
      },
    ];
    this.dataSourceService.addMany(startTask);
  }

  upsertOne() {
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

    this.dataSourceService.upsertOne(startTask);
  }

  removeOne() {
    this.dataSourceService.removeOne('TESTID');
  }

  removeMany() {
    this.dataSourceService.removeMany(['TESTID', 'componentsID']);
  }

  updateOne() {
    const startTask = {
      id: 'TESTID',
      name: 'Test 1',
      type: 'folder',
      children: [
        {
          name: 'src 1',
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
    this.dataSourceService.updateOne(startTask);
  }

  updateMany() {
    const startTask = [
      {
        id: 'TESTID',
        name: 'Test 2',
        type: 'folder',
        children: [
          {
            name: 'src 2',
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
      },
      {
        id: 'componentsID',
        name: 'components 2',
        type: 'folder',
        children: [
          {
            name: 'components 2',
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
      },
    ];
    this.dataSourceService.updateMany(startTask);
  }

  getOne() {
    const data = this.dataSourceService.getOne('TESTID');
    data.subscribe(console.log);
  }

  patchOne() {
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

    const workerTask = {
      id: 'TESTIDWOrker',
      name: 'Worker',
      type: 'folder',
      children: [
        {
          id: 'TESTIDWOrker2',
          name: 'Worker 2',
          type: 'file',
        },
      ],
    };

    this.dataSourceService.patchOne(startTask, workerTask);
  }
}

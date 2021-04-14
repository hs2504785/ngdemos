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
      name: 'Start',
      id: 'StartEvent_97141A33-45DF-4458-891E-D54FCD5D6994',
      children: [
        {
          name: 'Inputs',
          children: [
            {
              dataName: 'qwe',
              dataType: 'Text',
              id: 1587781833414,
              name: 'qwe (Text)',
              parentInfo: 'Start > Inputs > qwe (Text)',
            },
            {
              dataName: 'ewe',
              dataType: 'Text',
              id: 1587781834553,
              name: 'ewe (Text)',
              parentInfo: 'Start > Inputs > ewe (Text)',
            },
          ],
        },
      ],
    };

    this.dataSourceService.addOneToCache(startTask);
  }
}

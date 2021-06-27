import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from 'projects/libs/shared/src/public-api';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'app-file-size',
  templateUrl: './file-size.component.html',
  styleUrls: ['./file-size.component.scss'],
  providers: [FileSizePipe],
})
export class FileSizeComponent implements OnInit {
  files: File[];
  mappedFiles: File[];
  constructor(private fileSize: FileSizePipe) {}

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' },
    ];

    this.mappedFiles = this.files.map(file => {
      return {
        ...file,
        size: this.fileSize.transform(file.size, 'mb'),
      };
    });
  }
}

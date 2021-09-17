import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LoaderType } from './models/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  timer = null;

  constructor(private cd: ChangeDetectorRef) {}

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  public ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods() {
    let currentStep = 0;

    this.timer = setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
      this.cd.detectChanges();
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}

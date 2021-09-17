import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardComponent {
  @Input() public creditCardNumber = '';
  ccMasked = 'xxxx-xxxx-xxxx-xxxx';
  private readonly = false;
  public get isReadonly() {
    return this.readonly;
  }
  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadonlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return onlyLast4Shown.join(' ');
  }

  updateNum(value) {
    this.creditCardNumber = value;
  }

  setMask() {
    console.log(this.creditCardNumber);

    this.ccMasked = this.formatReadonlyCCNum(this.creditCardNumber);
  }
}

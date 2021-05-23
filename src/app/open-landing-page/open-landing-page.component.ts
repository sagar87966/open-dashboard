import { Component, Input, OnInit, ViewChild } from '@angular/core';
interface Tenure {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-open-landing-page',
  templateUrl: './open-landing-page.component.html',
  styleUrls: ['./open-landing-page.component.scss'],
})
export class OpenLandingPageComponent implements OnInit {
  selectedValue: string | undefined = '9';
  monthlyIncome: number = 178488;
  monthlyExpense: number = 20946;
  tenure: Tenure[] = [
    { value: '3 Months', viewValue: '3' },
    { value: '6 Months', viewValue: '6' },
    { value: '9 Months', viewValue: '9' },
  ];
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('slider')
  slider!: { value: number | undefined };

  changeMonthlyIncome() {
    console.log(this.slider?.value);
    if (this.monthlyIncome == 0) {
      this.slider.value = 10;
    }
  }

  @ViewChild('sliderTwo')
  sliderTwo!: { value: number | undefined };
  changeMonthlyExpense() {
    console.log(this.sliderTwo?.value);
    if (this.monthlyIncome == 0) {
      this.sliderTwo.value = 10;
    }
  }
}

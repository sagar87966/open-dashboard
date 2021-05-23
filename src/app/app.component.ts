import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

interface Tenure {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  selectedValue: string | undefined = '9';
  monthlyIncome: number = 178488;
  monthlyExpense: number = 20946;
  tenure: Tenure[] = [
    { value: '3 Months', viewValue: '3' },
    { value: '6 Months', viewValue: '6' },
    { value: '9 Months', viewValue: '9' },
  ];
}

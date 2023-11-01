import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  calValue: number = 0;
  funcT: any = 'None';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  // onClickValue

  onClickValue(value: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(value);
    } else {
      this.onFunctionClick(value);
    }
  }

  // onNumberClick

  onNumberClick(value: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + value;
    } else {
      this.calNumber = value;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  // onFunctionClick

  onFunctionClick(value: string) {
    if (value == 'Del') {
      this.clearFunction();
    } else if (this.funcT == 'None') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.funcT !== 'None') {
      this.secondNumber = this.calValue;
      this.valueCalculator(value);
    }
  }

  // valueCalculator

  valueCalculator(value: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValue(Total, value);
      if (value == '=') {
        this.onEqualFunction();
      }
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValue(Total, value);
      if (value == '=') {
        this.onEqualFunction();
      }
    }
    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValue(Total, value);
      if (value == '=') {
        this.onEqualFunction();
      }
    }
    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValue(Total, value);
      if (value == '=') {
        this.onEqualFunction();
      }
    }
    if (this.funcT == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValue(Total, value);
      if (value == '=') {
        this.onEqualFunction();
      }
    }
  }

  totalAssignValue(Total: number, value: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = value;
  }

  onEqualFunction() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'None';
  }

  clearFunction() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'None';
    this.calValue = 0;
  }
}

import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  inputString = ''
  answer = ''
  operators = ['/', '*', '-', '+']
  operator = ''
  isAnswered: boolean = false
  //calculationString = ''
  constructor(){}
  pressKey(input: string)
  {
    if(this.isAnswered)
    {
      return 
    }
    if(this.answer === '' && this.operators.includes(input))
    {
      input = ''
    }
    if(this.operators.includes(input))
    {
        this.operator = input
        var last = this.answer[this.answer.length - 1]
        if(this.operators.includes(last))
        {
          return
        }
    }
    this.answer += input;
  }

  allClear()
  {
    this.inputString = ''
    this.answer = ''
    this.isAnswered = false
  }

  getAnswer()
  {
    this.inputString = this.answer
    this.answer = parseFloat(eval(this.inputString)).toFixed(3).toString()
    //this.answer = ((Math.round(eval(this.inputString) * 100)/100).toFixed(3)).toString()
    
    for(let i=0; i<this.inputString.length; i++)
    {
      if(this.inputString[i] === '0' && this.inputString[i-1] === "/")
      {
        this.answer = 'Math Error'
        this.isAnswered = true
      }
    }
    

    /*this.calculationString = this.answer;
    this.op1 = parseFloat(this.answer.split(this.operator)[0]);
    this.op2 = parseFloat(this.answer.split(this.operator)[1]);
    if (this.operator === '/') {
      this.inputString = this.answer;
      this.answer = (this.op1 / this.op2).toString();
      this.inputString = this.calculationString;
    } else if (this.operator === '*') {
      this.inputString = this.answer;
      this.answer = (this.op1 * this.op2).toString();
      this.inputString = this.calculationString;
    } else if (this.operator === '-') {
      this.inputString = this.answer;
      this.answer = (this.op1 - this.op2).toString();
      this.inputString = this.calculationString;
    } else if (this.operator === '+') {
      this.inputString = this.answer;
      this.answer = eval(this.inputString)
      this.inputString = this.calculationString;
    } else {
      this.inputString = 'ERROR: Invalid Operation';
    }*/
  }

}

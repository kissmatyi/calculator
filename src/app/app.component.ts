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
  isAnsweredError: boolean = false
  isAnswered: boolean = false
  //calculationString = ''
  constructor(){}
  pressKey(input: string)
  {
    const operators = ['/', '*', '-', '+']
    const lastIsOperator = operators.includes(this.answer[this.answer.length - 1])

    if(this.isAnsweredError)
    {
      return 
    }
    if(this.answer === '' && operators.includes(input))
    {
      input = ''
    }
    if(operators.includes(input) && lastIsOperator)
    {
        return
    }
    if(!lastIsOperator && this.isAnswered && !operators.includes(input))
    {
      return 
    }

    this.answer += input
  }

  allClear()
  {
    this.inputString = ''
    this.answer = ''
    this.isAnsweredError = false
    this.isAnswered = false
  }

  getAnswer()
  {
    this.inputString = this.answer
    const isInteger = Number.isInteger(parseFloat(eval(this.inputString)))

    if(isInteger)
    {
      this.answer = eval(this.inputString)
    }
    else
    {
      this.answer = parseFloat(eval(this.inputString)).toFixed(3).toString()
    }

    for(let i=0; i<this.inputString.length; i++)
    {
      if(this.inputString[i] === '0' && this.inputString[i-1] === "/")
      {
        this.answer = 'Math Error'
        this.isAnsweredError = true
      }
    }

    this.isAnswered = true
    
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

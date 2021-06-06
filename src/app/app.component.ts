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
  pressKey(input: string)
  {
    const operators = ['/', '*', '-', '+']
    const lastIsOperator = operators.includes(this.answer[this.answer.length - 1])
    const isSecondOperator = operators.includes(input) && lastIsOperator
    const isEmpty = this.answer.length === 0 && operators.includes(input)
    let dotscount = 0
    let opscount = 0

    for (let i = 0; i < this.answer.length; i++) 
    {
      if(this.answer[i] === ".")
      {
        dotscount++;
      }
      if(operators.includes(this.answer[i]))
      {
        opscount++;
      }
    }

    if(this.isAnsweredError || isSecondOperator || isEmpty)
    {
      return 
    }  
    
    if(dotscount >= opscount+1 && input === '.')
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
  }

}

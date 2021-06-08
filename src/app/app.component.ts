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
  pressKey(input: any)
  {
    let dotscount = 0
    let opscount = 0
    const operators = ['/', '*', '-', '+']
    const lastIsOperator = operators.includes(this.answer[this.answer.length - 1])
    const isSecondOperator = operators.includes(input) && lastIsOperator
    const isEmpty = this.answer.length === 0 && isNaN(input)
    
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

    const enoughDots = dotscount >= opscount+1 && input === '.'

    if(this.isAnsweredError || isSecondOperator || isEmpty || enoughDots)
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
  }

  clear()
  {
    if(this.isAnsweredError)
    {
      return
    }
    else
    {
      this.answer = this.answer.substring(0, this.answer.length-1)
    }
  }

  getAnswer()
  {
    this.inputString = this.answer
    const isInteger = Number.isInteger(parseFloat(eval(this.inputString)))
    if(this.inputString.length === 0)
    {
      return 
    }

    if(isInteger)
    {
      this.answer = ''.concat(eval(this.inputString))
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
  } 
}

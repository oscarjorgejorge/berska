import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  goodFeedbackEnabled: boolean;

  firstNumber : number;
  secondNumber: number;

  constructor() { }

  // --- The function sets the values of the propiety of the class
  ngOnInit() {
    this.goodFeedbackEnabled = false;
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  // --- The function changes the property value and allow the confirmation that the form has been completed correctly.
  addNumbers(newNumbers) {
    this.goodFeedbackEnabled = true;
    
  // --- The function reset the value of "goodFeedbackEnabled" after 4secs. to hide the confirmation message.
  setTimeout(() => {
    this.goodFeedbackEnabled = false;
  }, 4000);

  // --- Adding the new numbers.
  this.firstNumber += newNumbers.addToFirstNumber;
  this.secondNumber += newNumbers.addToSecondNumber;
  }
}

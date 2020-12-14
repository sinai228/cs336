// Name: Sinai Park
// User ID: sp46
// Date: 10 / 29 / 2020
// CS336 @Calvin University

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sqrt game';

  constructor() { }
  ngOnInit() { }

  //initializing values
  public rootnumber: number = 144;
  public percent: number = 1;
  public myguess: number;

  //feedback, into feedbacks Array<string> once guess is entered
  public feedback: string = '';
  public feedbacks: Array<string> = [];

  //showme toggle
  //referrenced https://www.youtube.com/watch?v=2z9MksSNzVg&ab_channel=phpstepbystep
  showMe: boolean = true;


  submit() {
    const correctAnswer = Math.sqrt(this.rootnumber);
    const guess = Number(this.myguess);
    const count = this.feedbacks.length + 1;
    if (Math.abs(guess - correctAnswer) / correctAnswer <= this.percent / 100) {
      // answer is close enough.
      this.feedbacks.push(`Your answer was close! The correct answer was ${correctAnswer}. You got it in  ${count} tries!`);
      this.showMe = !this.showMe;
    } else if (guess < correctAnswer) {
      //answer is too low
      this.feedbacks.push("Your answer was too low! Enter a higher value. ");
    } else {
      // answer is too high.
      this.feedbacks.push("Your answer was too high! Enter a lower value. ");
    }
  }

  //random number generator function
  //referrenced from https://www.w3schools.com/jsref/jsref_random.asp
  randnum() {
    const rand = Math.floor((Math.random() * 250) + 50);
    this.rootnumber = rand;
  }
  //try again button clears and resets all values
  clear() {
    this.showMe = !this.showMe;
    this.rootnumber = 144;
    this.percent = 1;
    this.myguess = null;
    this.feedbacks = [];
  }

}



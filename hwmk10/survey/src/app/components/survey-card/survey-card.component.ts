import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  //Input variables
  @Input() question: string = "";
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() units: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  @Output() result: EventEmitter<number> = new EventEmitter<number>();

  //slider Changed event for mat-slider
  sliderChanged(event): void {
    //console.log(event);
    this.result.emit(event.value)
  }

}

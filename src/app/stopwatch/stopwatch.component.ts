import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval, fromEvent, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Lesson } from '../model/lesson';
@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
    // Elements
    startButton = document.querySelector('#start-button');
    stopButton = document.querySelector('#stop-button');
    resultsArea = document.querySelector<HTMLElement>('.output');
    // Observables
    tenthSecond$ = interval(100);
    startClick$ = fromEvent(this.startButton, 'click');
    stopClick$ = fromEvent(this.stopButton, 'click');

  constructor() {
  }

  ngOnInit() {
    const interval$ = interval(1000);
    const subscription = interval$.subscribe(console.log);
  }
}



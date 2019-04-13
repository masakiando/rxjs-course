import { Component, OnInit } from '@angular/core';
import { ILesson } from '../model/LessonsTable';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})

export class LessonsCounterComponent implements Observer, OnInit {
  lessonsCounter = 0;

  ngOnInit() {
    store.subscribe(this);
  }

  next(data: ILesson[]) {
    this.lessonsCounter = data.length;
  }
}

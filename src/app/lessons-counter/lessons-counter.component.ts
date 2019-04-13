import { Component, OnInit } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})

export class LessonsCounterComponent implements Observer, OnInit {
  lessonsCounter = 0;

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }
}

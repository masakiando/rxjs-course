import { Component } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import { lessonsList$, Observer } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer {
  lessonsCounter = 0;
  constructor() {
    lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }

}

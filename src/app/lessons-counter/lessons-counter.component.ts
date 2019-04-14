import { Component, OnInit } from '@angular/core';
import { ILesson } from '../model/LessonsTable';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})

export class LessonsCounterComponent implements
Observer<ILesson[]>, OnInit {
  lessonsCounter = 0;

  ngOnInit() {
    store.lessonsList$.subscribe(data => this.lessonsCounter = data.length);
  }

  next(data: ILesson[]) {
    // this.lessonsCounter = data.length;
  }

  // tslint:disable-next-line:member-ordering
  error: (err: any) => void;
  // tslint:disable-next-line:member-ordering
  complete: () => void;
}

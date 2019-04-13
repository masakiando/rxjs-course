import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Lessons, Lesson } from '../model/LessonsTable';
import { store } from './app-data';

import * as _ from 'lodash';
@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss'],
})
export class EventBusExperimentsComponent implements OnInit {
  ngOnInit() {
    store.initializeLessonsList(Lessons.slice(0));
    // シュミレートサーバーリクエスト
    setTimeout(() => {
      const newLesson = {
        id: Math.random(),
        description: 'New lesson arriving from the backend',
      };
      store.addLesson(newLesson);
    }, 5000);
  }

  addLesson(lessonText: string) {
    const newLesson = {
        id: Math.random(),
        description: lessonText,
    };
    store.addLesson(newLesson);
  }
}

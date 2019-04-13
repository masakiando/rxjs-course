import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Lessons, Lesson } from '../model/LessonsTable';
import { initializeLessonsList, lessonsList$, add } from './app-data';

import * as _ from 'lodash';
@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss'],
})
export class EventBusExperimentsComponent implements OnInit {
  ngOnInit() {
    initializeLessonsList(Lessons.slice(0));
    // シュミレートサーバーリクエスト
    setTimeout(() => {
      const newLesson = {
        id: Lessons.length + 1,
        description: 'New lesson arriving from the backend',
      };
      // TODO:
      add(newLesson);
    }, 5000);
  }

  addLesson(lessonText: string) {
    const newLesson = {
        id: Lessons.length + 1,
        description: lessonText,
    };
    add(newLesson);
  }
}

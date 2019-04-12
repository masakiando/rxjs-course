import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event_bus';
import { Lessons } from '../model/LessonsTable';
import { Lesson } from '../model/LessonsTable';
import * as _ from 'lodash';
@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss'],
})
export class EventBusExperimentsComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor() {
    this.lessons = Lessons.slice(0);
  }

  ngOnInit() {
    globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE, this.lessons);
    // シュミレートサーバーリクエスト
    setTimeout(() => {
      this.lessons.push({
        id: this.lessons.length + 1,
        description: 'New lesson arriving from the backend',
      });
      globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE, this.lessons);
    }, 5000);
  }

  addLesson(lessonText: string) {
    console.log('lessonText', lessonText);
    globalEventBus.notifyObserver(ADD_NEW_LESSON, lessonText);
  }
}

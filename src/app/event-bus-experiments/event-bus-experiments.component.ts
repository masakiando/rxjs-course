import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event_bus';
import { Lessons, } from '../model/LessonsTable';
@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss'],
})
export class EventBusExperimentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    globalEventBus.notifyObserver(
      LESSONS_LIST_AVAILABLE,
      Lessons.slice(0)
    );
  }

  addLesson(lessonText: string) {
    console.log('lessonText', lessonText);
    globalEventBus.notifyObserver(ADD_NEW_LESSON, lessonText);
  }
}

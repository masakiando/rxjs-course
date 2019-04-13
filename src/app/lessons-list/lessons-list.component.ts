import { Component, OnInit } from '@angular/core';
import { ILesson } from '../model/LessonsTable';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus-experiments/app-data';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})

export class LessonsListComponent implements Observer, OnInit {
  lessons: ILesson[] = [];

  ngOnInit(): void {
    store.subscribe(this);
  }

  next(data: ILesson[]) {
    this.lessons = data;
  }

  toggleLessonViewed(lesson: ILesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: ILesson) {
    store.deleteLesson(deleted);
  }
}

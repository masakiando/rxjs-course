import { Component, OnInit } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus-experiments/app-data';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})

export class LessonsListComponent implements Observer, OnInit {
  lessons: Lesson[] = [];

  ngOnInit(): void {
    store.lessonsList$.subscribe(this);

  }

  next(data: Lesson[]) {
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }
}

import { Component, OnInit } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import * as _ from 'lodash';
import { Observer, lessonsList$ } from '../event-bus-experiments/app-data';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent implements Observer, OnInit {
  lessons: Lesson[] = [];

  ngOnInit(): void {
    lessonsList$.subscribe(this);

  }

  next(data: Lesson[]) {
    this.lessons = data.slice(0);
  }

  toggleLessonViewed(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === deleted.id);
  }
}

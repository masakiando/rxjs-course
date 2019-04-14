import { Component, OnInit } from '@angular/core';
import { ILesson } from '../model/ILessons2';
import * as _ from 'lodash';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})

export class LessonsListComponent implements Observer<ILesson[]>, OnInit {
  closed?: boolean;
  error: (err: any) => void;
  complete: () => void;
  lessons: ILesson[] = [];

  ngOnInit(): void {
    store.lessonsList$.subscribe(data => this.lessons = data);
  }

  next(data: ILesson[]) {
    // this.lessons = data;
  }

  toggleLessonViewed(lesson: ILesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: ILesson) {
    store.deleteLesson(deleted);
  }
}

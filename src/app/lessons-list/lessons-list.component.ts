import { Component } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event_bus';
import * as _ from 'lodash';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent implements Observer {
  lessons: Lesson[] = [];

  constructor() {
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: this.lessons.length + 1,
          description: lessonText,
        });
      },
    });
  }

  notify(data: Lesson[]) {
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === deleted.id);
    globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE, this.lessons);
  }
}

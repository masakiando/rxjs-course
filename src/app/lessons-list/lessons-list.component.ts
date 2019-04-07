import { Component } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event_bus';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent implements Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('LessonsListComponent is registered as observer ...');
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
    console.log('LessonsListComponent received data ...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggle lesson');
    lesson.completed = !lesson.completed;
  }
}

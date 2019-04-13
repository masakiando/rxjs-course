import * as _ from 'lodash';
import { Lesson } from '../model/LessonsTable';
import { MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS } from '@angular/material';

export interface Observer {
  next(data: any);
}

export interface Observable {
  subscribe(obs: Observer);
  unsubscribe(obs: Observer);
}

interface Subject extends Observer, Observable {
}

class SubjectImplementation implements Subject {
  private observers: Observer[] = [];

  next(data: any) {
    this.observers.forEach(obs => {
      return obs.next(data);
    });
  }
  subscribe(obs: Observer) {
    this.observers.push(obs);
  }
  unsubscribe(obs: Observer) {
    _.remove(this.observers, el => el === obs);
  }
}

class DataStore {
  private lessons: Lesson[] = [];
  private lessonsListSubject = new SubjectImplementation();

  public lessonsList$: Observable = {
    subscribe: obs => {
      this.lessonsListSubject.subscribe(obs);
      // これないと
      obs.next(this.lessons);
    },
    unsubscribe: obs => this.lessonsListSubject.unsubscribe(obs),
  };

  public initializeLessonsList(newList: Lesson[]) {
    this.lessons = _.cloneDeep(newList);
    this.broadcast();
  }

  public addLesson(newLesson: Lesson) {
    this.lessons.push(_.cloneDeep(newLesson));
    this.broadcast();
  }

  public deleteLesson(deleted: Lesson) {
    _.remove(
      this.lessons,
      lesson => lesson.id === deleted.id
    );
    this.broadcast();
  }

  public toggleLessonViewed(toggle: Lesson) {
    const lesson = _.find(
      this.lessons,
      // tslint:disable-next-line:no-shadowed-variable
      lesson => lesson.id === toggle.id
    );
    lesson.completed = !lesson.completed;
    this.broadcast();
  }

  broadcast() {
    this.lessonsListSubject.next(_.cloneDeep(this.lessons));
  }
}

export const store = new DataStore();

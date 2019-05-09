import * as _ from 'lodash';
import { ILesson } from '../model/ILessons2';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

class DataStore  {
  private lessonsListSubject = new BehaviorSubject([]);
  public lessonsList$: Observable<ILesson[]> = this.lessonsListSubject.asObservable();

  initializeLessonsList(newList: ILesson[]) {
    this.lessonsListSubject.next(_.cloneDeep(newList));
  }

  addLesson(newLesson: ILesson) {
    const lessons = this.cloneLessons();
    lessons.push(_.cloneDeep(newLesson));
    this.lessonsListSubject.next(lessons);
  }

  deleteLesson(deleted: ILesson) {
    const lessons = this.cloneLessons();
    _.remove(lessons, l => l.id === deleted.id);
    this.lessonsListSubject.next(lessons);
  }

  toggleLessonViewed(toggle: ILesson) {
    const lessons = this.cloneLessons();
    const lesson = _.find(lessons, l => l.id === toggle.id);
    lesson.completed = !lesson.completed;
    this.lessonsListSubject.next(lessons);
  }

  cloneLessons() {
    return _.cloneDeep(this.lessonsListSubject.getValue());
  }
}

export const store = new DataStore();
// export interface Observer {
//   next(data: any);
// }

// export interface Observable {
//   subscribe(obs: Observer);
//   unsubscribe(obs: Observer);
// }

// interface Subject extends Observer, Observable {
// }

// class SubjectImplementation implements Subject {
//   private observers: Observer[] = [];

//   next(data: any) {
//     this.observers.forEach(obs => {
//       return obs.next(data);
//     });
//   }
//   subscribe(obs: Observer) {
//     this.observers.push(obs);
//   }
//   unsubscribe(obs: Observer) {
//     _.remove(this.observers, el => el === obs);
//   }
// }

// class DataStore implements Observable {
//   private lessons: ILesson[] = [];
//   private lessonsListSubject = new SubjectImplementation();

//   subscribe(obs: Observer) {
//     this.lessonsListSubject.subscribe(obs);
//     // これないと
//     obs.next(this.lessons);
//   }

//   unsubscribe(obs: Observer) {
//     this.lessonsListSubject.unsubscribe(obs);
//   }


//   initializeLessonsList(newList: ILesson[]) {
//     this.lessons = _.cloneDeep(newList);
//     this.broadcast();
//   }

//   addLesson(newLesson: ILesson) {
//     this.lessons.push(_.cloneDeep(newLesson));
//     this.broadcast();
//   }

//   deleteLesson(deleted: ILesson) {
//     _.remove(
//       this.lessons,
//       lesson => lesson.id === deleted.id
//     );
//     this.broadcast();
//   }

//   toggleLessonViewed(toggle: ILesson) {
//     const lesson = _.find(
//       this.lessons,
//       // tslint:disable-next-line:no-shadowed-variable
//       lesson => lesson.id === toggle.id
//     );
//     lesson.completed = !lesson.completed;
//     this.broadcast();
//   }

//   broadcast() {
//     this.lessonsListSubject.next(_.cloneDeep(this.lessons));
//   }
// }
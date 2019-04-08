import { Component } from '@angular/core';
import { Lesson } from '../model/LessonsTable';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event_bus';
@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent {
  lessonsCounter = 0;
  constructor() {
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    
    globalEventBus.registerObserver(
      ADD_NEW_LESSON,
       { notify: lessonText => this.lessonsCounter += 1 }
     );
  }

  notify(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }

}

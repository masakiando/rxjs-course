import { Component } from '@angular/core';
import { Lesson } from '../model/EventBus_LessonsTable';
import { globalEventBus, Observer } from '../event-bus-experiments/event_bus';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('LessonsListComponent is registered as observer ...');
    globalEventBus.registerObserver(this);
  }

  notify(data: Lesson[]) {
    console.log('LessonsListComponent received data ...');
    this.lessons = data;
  }

}

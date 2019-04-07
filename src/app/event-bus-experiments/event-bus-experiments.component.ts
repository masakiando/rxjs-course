import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event_bus';
import { EventBus_Lessons } from '../model/EventBus_LessonsTable';
@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss'],
})
export class EventBusExperimentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    globalEventBus.notifyObserver(EventBus_Lessons);
  }
}

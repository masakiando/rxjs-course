import * as _ from 'lodash';
import { Observer } from './event_bus';
export const LESSONS_LIST_AVAILABLE = 'LESSONS_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSONS';

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unregisterObserver(eventType: string, obs: Observer);
  notifyObserver(eventType: string, data: any);
}

class EventBus implements Subject {
  private observers: {
    [key: string]: Observer[];
  } = {};

  registerObserver(eventType: string, obs: Observer) {
    const observers = this.observersPerEventType(eventType);
    console.log('observers: ', observers, 'eventType: ', eventType, 'obs: ', obs);
    observers.push(obs);
    // console.log('observers', observers);
  }
  unregisterObserver(eventType: string, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs);
  }

  notifyObserver(eventType: string, data: any) {
    this.observersPerEventType(eventType).forEach(obs => {
      obs.notify(data);
    });
  }
  private observersPerEventType(eventType: string) {
    const observersPerType = this.observers[eventType];
    if (!observersPerType) {
      this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }
}

export const globalEventBus = new EventBus();

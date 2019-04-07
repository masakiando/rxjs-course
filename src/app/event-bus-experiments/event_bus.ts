import * as _ from 'lodash';
export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(obs: Observer);
  unregisterObserver(obs: Observer);
  notifyObserver(data: any);
}

class EventBus implements Subject {
  private observers: Observer[] = [];

  registerObserver(obs: Observer) {
    console.log('EventBus registerObserver');
    this.observers.push(obs);
    console.log(this.observers);
  }
  unregisterObserver(obs: Observer) {
    console.log('EventBus unregisterObserver');
    _.remove(this.observers, el => el === obs);
  }
  notifyObserver(data: any) {
    console.log('EventBus notifyObserver');
    this.observers.forEach(obs => {
      console.log(obs);
      console.log(data);
      obs.notify(data);
    });
  }
}

export const globalEventBus = new EventBus();

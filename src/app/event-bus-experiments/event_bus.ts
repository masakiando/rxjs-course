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
      this.observers.push(obs);
  }
  unregisterObserver(obs: Observer) {}
  notifyObserver(data: any) {}
}

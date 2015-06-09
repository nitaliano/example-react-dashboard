import { EventEmitter } from 'events';
import Dispatcher from '../core/Dispatcher';

class BaseStore extends EventEmitter {
  constructor() {
    super();
    this.changeEvent = 'change';
    this.subscribe(() => this.registerToActions.bind(this));
  }

  subscribe(actionSubscribe) {
    this.dispatchToken = Dispatcher.register(actionSubscribe());
  }

  emitChange() {
    this.emit(this.changeEvent);
  }

  addChangeListener(cb) {
    this.on(this.changeEvent, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(this.changeEvent, cb);
  }

  registerToActions() {
    throw new Error('Child store needs to implement _registerToActions :)');
  }
}

export default BaseStore;

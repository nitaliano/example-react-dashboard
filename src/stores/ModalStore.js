import BaseStore from './BaseStore';
import { MODAL_SHOW, MODAL_HIDE } from '../constants/ModalConstants';

class ModalStore extends BaseStore {
  constructor() {
    super();
    this.hidden = true;
    this.dialog = '';
    this.title = 'Modal';
  }

  registerToActions(action) {
    switch (action.actionType) {
      case MODAL_SHOW:
        if (!this.hidden) {
          return;
        }
        this.hidden = false;
        this.dialog = action.payload.dialog;
        this.emitChange();
        break;
      case MODAL_HIDE:
        if (this.hidden) {
          return;
        }
        this.hidden = true;
        this.dialog = '';
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new ModalStore();

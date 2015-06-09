import BaseStore from './BaseStore';
import { CHANGE_LOCATION } from '../constants/AppConstants';

class AppStore extends BaseStore {
  constructor() {
    super();
    this.path = null;
  }

  registerToActions(action) {
    switch (action.actionType) {
      case CHANGE_LOCATION:
        this.path = action.payload.path;
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new AppStore();

import BaseStore from './BaseStore';
import { SET_USERS, CREATE_USER } from '../constants/UsersConstants';

class UsersStore extends BaseStore {
  constructor() {
    super();
    this.users = null;
  }

  registerToActions(action) {
    switch (action.actionType) {
      case SET_USERS:
        this.users = action.payload.users;
        this.emitChange();
        break;
      case CREATE_USER:
        if (!this.users) {
          this.users = [action.payload.user];
        } else {
          this.users.push(action.payload.user);
        }
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new UsersStore();

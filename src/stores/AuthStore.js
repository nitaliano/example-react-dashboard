import BaseStore from './BaseStore';
import { LOGIN_USER, LOGOUT_USER, FAILED_LOGIN, UNAUTHORIZED_USER } from '../constants/AuthConstants';

class AuthStore extends BaseStore {
  constructor() {
    super();
    this.user = null;
    this.failedAuth = false;
  }

  registerToActions(action) {
    switch (action.actionType) {
      case LOGIN_USER:
        this.user = action.payload.user;
        window.sessionStorage.setItem('token', action.payload.token);
        this.failedAuth = false;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this.user = null;
        window.sessionStorage.removeItem('token');
        this.failedAuth = false;
        this.emitChange();
        break;
      case FAILED_LOGIN:
      case UNAUTHORIZED_USER:
        this.user = null;
        window.sessionStorage.removeItem('token');
        this.failedAuth = true;
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new AuthStore();

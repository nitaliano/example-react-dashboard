import apiUtils from '../utils/apiUtils';
import Dispatcher from '../core/Dispatcher';
import { SET_REPORT } from '../constants/ReportConstants';
import { UNAUTHORIZED_USER } from '../constants/AuthConstants';
import { SET_USERS, CREATE_USER } from '../constants/UsersConstants';
import { UPDATE_SET_CONFIGS } from '../constants/ConfigConstants';

export default {
  getReport() {
    apiUtils.getReport()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: SET_REPORT,
          payload: {
            report: res.body.data
          }
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatchUnauthorizedUser();
        }
      });
  },

  getUsers() {
    apiUtils.getUsers()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: SET_USERS,
          payload: {
            users: res.body
          }
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatchUnauthorizedUser();
        }
      });
  },

  createUser(user) {
    apiUtils.createUser(user)
      .then((res) => {
        Dispatcher.dispatch({
          actionType: CREATE_USER,
          payload: {
            user: res.body
          }
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatchUnauthorizedUser();
        }
      });
  },

  getConfigs() {
    apiUtils.getConfigs()
      .then((res) => {
        Dispatcher.dispatch({
          actionType: UPDATE_SET_CONFIGS,
          payload: {
            configs: res.body
          }
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatchUnauthorizedUser();
        }
      });
  }
};

function dispatchUnauthorizedUser() {
  Dispatcher.dispatch({
    actionType: UNAUTHORIZED_USER
  });
}

import Dispatcher from '../core/Dispatcher';
import { LOGIN_USER, FAILED_LOGIN } from '../constants/AuthConstants';
import { MODAL_SHOW } from '../constants/ModalConstants';
import apiUtils from '../utils/apiUtils';

export default {
  login(email, password) {
    apiUtils.login(email, password)
      .then((res) => {
        Dispatcher.dispatch({
          actionType: LOGIN_USER,
          payload: {
            user: res.body.user,
            token: res.body.token
          }
        });
      })
      .catch(() => {
        Dispatcher.dispatch({
          actionType: FAILED_LOGIN
        });
        Dispatcher.dispatch({
          actionType: MODAL_SHOW,
          payload: {
            dialog: 'Failed login'
          }
        });
      });
  }
};

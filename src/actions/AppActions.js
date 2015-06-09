import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import Dispatcher from '../core/Dispatcher';
import { CHANGE_LOCATION } from '../constants/AppConstants';
import { MODAL_SHOW, MODAL_HIDE } from '../constants/ModalConstants';
export default {
  navigateTo(path) {
    if (canUseDOM) {
      window.history.replaceState({}, document.title, path);
    }

    setTimeout(() => {
      Dispatcher.dispatch({
        actionType: CHANGE_LOCATION,
        payload: {
          path: path
        }
      });
    }, 1);
  },

  showModal() {
    Dispatcher.dispatch({
      actionType: MODAL_SHOW
    });
  },

  hideModal() {
    Dispatcher.dispatch({
      actionType: MODAL_HIDE
    });
  }
};

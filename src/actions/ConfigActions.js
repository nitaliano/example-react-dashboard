import apiUtils from '../utils/apiUtils';
import Dispatcher from '../core/Dispatcher';
import DashboardActions from '../actions/DashboardActions';
import { CREATE_CONFIG, CREATE_UPDATE_DOMAIN, CREATE_ADD_SCRIPT, CREATE_REMOVE_SCRIPT } from '../constants/ConfigConstants';
import { UPDATE_CONFIG, CREATE_UPDATE_REDIRECT, CREATE_UPDATE_SCRIPT, CREATE_UPDATE_REWRITE } from '../constants/ConfigConstants';
import { UPDATE_UPDATE_DOMAIN, UPDATE_ADD_SCRIPT, UPDATE_REMOVE_SCRIPT } from '../constants/ConfigConstants';
import { UPDATE_UPDATE_REDIRECT, UPDATE_UPDATE_SCRIPT, UPDATE_UPDATE_REWRITE, UPDATE_GET_SELECTED } from '../constants/ConfigConstants';

export default {
  updateDomain(domain, isUpdate, id) {
    Dispatcher.dispatch({
      actionType: isUpdate ? UPDATE_UPDATE_DOMAIN : CREATE_UPDATE_DOMAIN,
      payload: {
        domain: domain,
        id: id
      }
    });
  },

  addScript(isUpdate, id) {
    Dispatcher.dispatch({
      actionType: isUpdate ? UPDATE_ADD_SCRIPT : CREATE_ADD_SCRIPT,
      payload: {
        id: id
      }
    });
  },

  removeScript(index, isUpdate, id) {
    Dispatcher.dispatch({
      actionType: isUpdate ? UPDATE_REMOVE_SCRIPT : CREATE_REMOVE_SCRIPT,
      payload: {
        index: index,
        id: id
      }
    });
  },

  updateScript(index, script, isUpdate, id) {
    Dispatcher.dispatch({
      actionType: isUpdate ? UPDATE_UPDATE_SCRIPT : CREATE_UPDATE_SCRIPT,
      payload: {
        index: index,
        script: script,
        id: id
      }
    });
  },

  updateRedirect(redirects, isUpdate, id) {
    // get out of the editors execution context
    setTimeout(() => {
      Dispatcher.dispatch({
        actionType: isUpdate ? UPDATE_UPDATE_REDIRECT : CREATE_UPDATE_REDIRECT,
        payload: {
          redirects: redirects,
          id: id
        }
      });
    }, 1);
  },

  updateRewrite(rewrite, isUpdate, id) {
    // get out of the editors execution context
    setTimeout(() => {
      Dispatcher.dispatch({
        actionType: isUpdate ? UPDATE_UPDATE_REWRITE : CREATE_UPDATE_REWRITE,
        payload: {
          rewriterule: rewrite,
          id: id
        }
      });
    }, 1);
  },

  getSelectedConfig(id) {
    Dispatcher.dispatch({
      actionType: UPDATE_GET_SELECTED,
      payload: {
        id: id
      }
    });
  },

  createConfig(config, isUpdate) {
    // TODO add error handling for bad json cases
    if (typeof config.redirects === 'string' && config.redirects !== '') {
      config.redirects = JSON.parse(config.redirects);
    }

    if (typeof config.rewriterule === 'string' && config.rewriterule !== '') {
      config.rewriterule = JSON.parse(config.rewriterule);
    }

    if (!isUpdate) {
      // TODO Add failure and success messages
      apiUtils.createConfig(config)
        .then((res) => {
          Dispatcher.dispatch({
            actionType: CREATE_CONFIG,
            payload: {
              config: res.body
            }
          });
          DashboardActions.getConfigs();
        });
    } else {
      apiUtils.updateConfig(config)
        .then((res) => {
          Dispatcher.dispatch({
            actionType: UPDATE_CONFIG,
            payload: {
              config: res.body
            }
          });
        });
    }
  }
};

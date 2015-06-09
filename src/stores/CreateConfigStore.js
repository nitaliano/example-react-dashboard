import BaseStore from './BaseStore';
import { CREATE_CONFIG, CREATE_UPDATE_DOMAIN, CREATE_ADD_SCRIPT, CREATE_REMOVE_SCRIPT } from '../constants/ConfigConstants';
import { CREATE_UPDATE_REDIRECT, CREATE_UPDATE_SCRIPT, CREATE_UPDATE_REWRITE } from '../constants/ConfigConstants';

class CreateConfigStore extends BaseStore {
  constructor() {
    super();

    this.config = {
      domain: '',
      scripts: [],
      redirects: '',
      rewriterule: ''
    };
  }

  registerToActions(action) {
    switch (action.actionType) {
      case CREATE_CONFIG:
        let config = action.payload.config;
        config.redirects = JSON.stringify(config.redirects);
        config.rewriterule = JSON.stringify(config.rewriterule);
        this.config = config;
        this.emitChange();
        break;
      case CREATE_UPDATE_DOMAIN:
        this.config.domain = action.payload.domain;
        this.emitChange();
        break;
      case CREATE_ADD_SCRIPT:
        if (!this.config.scripts) {
          this.config.scripts = [''];
        } else {
          this.config.scripts.push('');
        }
        this.emitChange();
        break;
      case CREATE_REMOVE_SCRIPT:
        this.config.scripts.splice(action.payload.index, 1);
        this.emitChange();
        break;
      case CREATE_UPDATE_SCRIPT:
        this.config.scripts[action.payload.index] = action.payload.script;
        this.emitChange();
        break;
      case CREATE_UPDATE_REDIRECT:
        this.config.redirects = action.payload.redirects;
        this.emitChange();
        break;
      case CREATE_UPDATE_REWRITE:
        this.config.rewriterule = action.payload.rewriterule;
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new CreateConfigStore();

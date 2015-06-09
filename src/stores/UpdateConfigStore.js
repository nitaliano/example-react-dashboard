import BaseStore from './BaseStore';
import { UPDATE_CONFIG, UPDATE_UPDATE_DOMAIN, UPDATE_ADD_SCRIPT, UPDATE_REMOVE_SCRIPT, UPDATE_GET_SELECTED } from '../constants/ConfigConstants';
import { UPDATE_UPDATE_REDIRECT, UPDATE_UPDATE_SCRIPT, UPDATE_UPDATE_REWRITE, UPDATE_SET_CONFIGS } from '../constants/ConfigConstants';

class UpdateConfigStore extends BaseStore {
  constructor() {
    super();

    this.configs = {};
    this.selected = null;
  }

  registerToActions(action) {
    var config;

    switch (action.actionType) {
      case UPDATE_CONFIG:
        config = action.payload.config;
        config.redirects = JSON.stringify(config.redirects, null, 2);
        config.rewriterule = JSON.stringify(config.rewriterule, null, 2);
        this.configs[config.id] = config;
        this.selected = config;
        this.emitChange();
        break;
      case UPDATE_SET_CONFIGS:
        for (let i = 0; i < action.payload.configs.length; i++) {
          config = action.payload.configs[i];
          config.redirects = JSON.stringify(config.redirects, null, 2);
          config.rewriterule = JSON.stringify(config.rewriterule, null, 2);

          this.configs[config.id] = config;

          if (!this.selected && i === 0) {
            this.selected = config;
          }
        }
        this.emitChange();
        break;
      case UPDATE_UPDATE_DOMAIN:
        this.configs[action.payload.id].domain = action.payload.domain;
        this.emitChange();
        break;
      case UPDATE_ADD_SCRIPT:
        if (!this.configs[action.payload.id].scripts) {
          this.configs[action.payload.id].scripts = [''];
        } else {
          this.configs[action.payload.id].scripts.push('');
        }
        this.emitChange();
        break;
      case UPDATE_REMOVE_SCRIPT:
        this.configs[action.payload.id].scripts.splice(action.payload.index, 1);
        this.emitChange();
        break;
      case UPDATE_UPDATE_SCRIPT:
        this.configs[action.payload.id].scripts[action.payload.index] = action.payload.script;
        this.emitChange();
        break;
      case UPDATE_UPDATE_REDIRECT:
        this.configs[action.payload.id].redirects = action.payload.redirects;
        this.emitChange();
        break;
      case UPDATE_UPDATE_REWRITE:
        this.configs[action.payload.id].rewriterule = action.payload.rewriterule;
        this.emitChange();
        break;
      case UPDATE_GET_SELECTED:
        this.selected = this.configs[action.payload.id];
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new UpdateConfigStore();

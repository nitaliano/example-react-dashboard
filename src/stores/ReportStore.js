import BaseStore from './BaseStore';
import { SET_REPORT } from '../constants/ReportConstants';

class ReportStore extends BaseStore {
  constructor() {
    super();
    this.report = null;
  }

  registerToActions(action) {
    switch (action.actionType) {
      case SET_REPORT:
        this.report = action.payload.report;
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new ReportStore();

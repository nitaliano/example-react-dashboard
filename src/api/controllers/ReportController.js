import BaseController from './BaseController';

class ReportController extends BaseController {
  getReport(token) {
    return this.get('/report', null, token);
  }
}

export default ReportController;

import request from 'request';
import BaseController from './BaseController';

class AuthController extends BaseController {
  login(email, password) {
    return this.post('/login', {
      email: email,
      password: password
    });
  }

  // override
  send(method, url, json) {
    var self = this;

    return new Promise((resolve, reject) => {
      var options = {
        url: self.baseApiUrl + url,
        method: method,
        form: json,
        json: true,
        headers: {
          'X-User-Id': 'c0f04b32074a2800ecdbd8fdf2317d36facc2be7'
        }
      };

      request(options, (err, res, body) => {
        if (err) {
          return reject({ status: res.statusCode, error: err });
        }
        return resolve({ status: res.statusCode, data: body });
      });
    });
  }
}

export default AuthController;

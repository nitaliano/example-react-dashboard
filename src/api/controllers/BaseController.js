import request from 'request';

class BaseController {
  constructor() {
    this.baseApiUrl = 'http://166.78.104.55';
  }

  get(url, data, token) {
    return this.send('GET', url, data, token);
  }

  post(url, data, token) {
    return this.send('POST', url, data, token);
  }

  put(url, data, token) {
    return this.send('PUT', url, data, token);
  }

  send(method, url, data, token) {
    var self = this;

    return new Promise((resolve, reject) => {
      var options = {
        url: self.baseApiUrl + url,
        method: method,
        json: true,
        headers: {
          'X-User-Id': 'c0f04b32074a2800ecdbd8fdf2317d36facc2be7',
          'Cookie': 'auth=' + token
        }
      };

      if (method === 'GET') {
        options.data = data;
        options.headers['Content-Type'] = 'application/json';
      } else {
        options.body = JSON.stringify(data);
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }

      request(options, (err, res, body) => {
        if (err) {
          return reject({ status: res.statusCode, error: err });
        }
        return resolve({ status: res.statusCode, data: body });
      });
    });
  }
}

export default BaseController;

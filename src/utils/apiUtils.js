import http from 'superagent';

export default {
  login(email, password) {
    return new Promise((resolve, reject) => {
      http
        .post('api/login')
        .send({ email: email, password: password })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  createUser(user) {
    return new Promise((resolve, reject) => {
      http
        .post('api/user/' + sessionStorage.getItem('token'))
        .type('application/json')
        .accept('application/json')
        .send({ user: user })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  createConfig(config) {
    return new Promise((resolve, reject) => {
      http
        .post('api/config/' + sessionStorage.getItem('token'))
        .type('application/json')
        .accept('application/json')
        .send({ config: config })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  updateConfig(config) {
    return new Promise((resolve, reject) => {
      http
        .put('api/config/' + sessionStorage.getItem('token'))
        .type('application/json')
        .accept('application/json')
        .send({ config: config })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  getReport() {
    return new Promise((resolve, reject) => {
      http
        .get('api/report/' + sessionStorage.getItem('token'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  getUsers() {
    return new Promise((resolve, reject) => {
      http
        .get('api/users/' + sessionStorage.getItem('token'))
        .accept('application/json')
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  },

  getConfigs() {
    return new Promise((resolve, reject) => {
      http
        .get('api/configs/' + sessionStorage.getItem('token'))
        .accept('application/json')
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
    });
  }
};

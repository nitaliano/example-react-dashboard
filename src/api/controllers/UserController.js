import BaseController from './BaseController';

class UserController extends BaseController {
  getAllUsers(token) {
    return this.get('/users', null, token);
  }

  createUser(user, token) {
    return this.post('/user', {
      email: user.email,
      password: user.password,
      name: user.name || '',
      isAdmin: user.isAdmin || false
    }, token);
  }
}

export default UserController;

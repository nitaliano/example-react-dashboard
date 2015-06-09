import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';
import ReportController from './controllers/ReportController';
import ConfigController from './controllers/ConfigController';

var router = new Router();
var authController = new AuthController();
var userController = new UserController();
var reportController = new ReportController();
var configController = new ConfigController();

function sendResponse(res, results) {
  res.status(results.status);
  res.json(results.data);
}

// TODO Add error codes when invalid data is supplied
router.post('/login', (req, res) => {
  authController.login(req.body.email, req.body.password)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.post('/user/:token', (req, res) => {
  userController.createUser(req.body.user, req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.get('/users/:token', (req, res) => {
  userController.getAllUsers(req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.get('/report/:token', (req, res) => {
  reportController.getReport(req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.post('/config/:token', (req, res) => {
  configController.createConfig(req.body.config, req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.put('/config/:token', (req, res) => {
  configController.updateConfig(req.body.config, req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

router.get('/configs/:token', (req, res) => {
  configController.getAllConfigs(req.params.token)
    .then((data) => sendResponse(res, data))
    .catch((err) => sendResponse(res, err));
});

export default router;

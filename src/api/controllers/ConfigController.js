import BaseController from './BaseController';

class ConfigController extends BaseController {
  createConfig(config, token) {
    return this.post('/config', {
      domain: config.domain,
      scripts: config.scripts || [],
      redirects: config.redirects || {},
      rewriterule: config.rewriterule || {}
    }, token);
  }

  updateConfig(config, token) {
    return this.put('/config', {
      id: config.id,
      domain: config.domain,
      scripts: config.scripts || [],
      redirects: config.redirects || {},
      rewriterule: config.rewriterule || {}
    }, token);
  }

  getAllConfigs(token) {
    return this.get('/configs', null, token);
  }
}

export default ConfigController;

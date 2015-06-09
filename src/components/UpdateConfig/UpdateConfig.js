import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import UpdateConfigActions from '../../actions/ConfigActions';
import Config from '../Config';
import Form from '../Form';
import FormGroup from '../FormGroup';

class UpdateConfig extends React.Component {
  static propTypes = {
    configs: PropTypes.object,
    selected: PropTypes.object
  };

  onDomainNameChange(value) {
    UpdateConfigActions.updateDomain(value, true, this.props.selected.id);
  }

  onAddScript() {
    UpdateConfigActions.addScript(true, this.props.selected.id);
  }

  onRedirectChange(jsonString) {
    UpdateConfigActions.updateRedirect(jsonString, true, this.props.selected.id);
  }

  onRewriteChange(jsonString) {
    UpdateConfigActions.updateRewrite(jsonString, true, this.props.selected.id);
  }

  onSaveClick() {
    UpdateConfigActions.createConfig(this.props.selected, true, this.props.selected.id);
  }

  onRemoveScript(index) {
    UpdateConfigActions.removeScript(index, true, this.props.selected.id);
  }

  onUpdateScript(index, updatedText) {
    UpdateConfigActions.updateScript(index, updatedText, true, this.props.selected.id);
  }

  onSelectedConfigChange(e) {
    UpdateConfigActions.getSelectedConfig(e.target.selectedOptions[0].id);
  }

  get configDropdown() {
    var self = this;

    if (!this.props.configs) {
      return (<div>No configs found</div>);
    }

    var configs = Object.keys(this.props.configs);
    if (!configs.length) {
      return (<div>No configs found</div>);
    }

    return (
      <Form className="UpdateConfig-select">
        <FormGroup>
          <label>Select a config</label>
          <select className="form-control" onChange={this.onSelectedConfigChange.bind(this)}>
            {configs.map((key, i) => {
              let config = self.props.configs[key];
              return (
                <option
                  key={i}
                  id={config.id}
                  defaultValue={config.name === self.props.selected.name}>
                  {config.domain}
                </option>
              );
            })}
          </select>
        </FormGroup>
      </Form>
    );
  }

  render() {
    var config = '';
    if (this.props.selected) {
      config = (
        <Config
          config={this.props.selected}
          onDomainNameChange={this.onDomainNameChange.bind(this)}
          onAddScript={this.onAddScript.bind(this)}
          onRedirectChange={this.onRedirectChange.bind(this)}
          onRewriteChange={this.onRewriteChange.bind(this)}
          onSaveClick={this.onSaveClick.bind(this)}
          onRemoveScript={this.onRemoveScript.bind(this)}
          onUpdateScript={this.onUpdateScript.bind(this)} />
      );
    }

    return (
      <div className="UpdateConfig">
        {this.configDropdown}
        {config}
      </div>
    );
  }
}

export default UpdateConfig;

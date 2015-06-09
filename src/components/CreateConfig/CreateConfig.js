import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Config from '../Config';
import CreateConfigActions from '../../actions/ConfigActions';

class CreateConfig extends React.Component {
  static propTypes = {
    config: PropTypes.object
  };

  onDomainNameChange(value) {
    CreateConfigActions.updateDomain(value);
  }

  onAddScript() {
    CreateConfigActions.addScript();
  }

  onRedirectChange(jsonString) {
    CreateConfigActions.updateRedirect(jsonString);
  }

  onRewriteChange(jsonString) {
    CreateConfigActions.updateRewrite(jsonString);
  }

  onRemoveScript(index) {
    CreateConfigActions.removeScript(index);
  }

  onUpdateScript(index, updatedText) {
    CreateConfigActions.updateScript(index, updatedText);
  }

  onSaveClick() {
    CreateConfigActions.createConfig(this.props.config);
  }

  render() {
    return (
      <div className="CreateConfig">
        <Config
          config={this.props.config}
          onDomainNameChange={this.onDomainNameChange.bind(this)}
          onAddScript={this.onAddScript.bind(this)}
          onRedirectChange={this.onRedirectChange.bind(this)}
          onRewriteChange={this.onRewriteChange.bind(this)}
          onSaveClick={this.onSaveClick.bind(this)}
          onRemoveScript={this.onRemoveScript.bind(this)}
          onUpdateScript={this.onUpdateScript.bind(this)}
          />
      </div>
    );
  }
}

export default CreateConfig;

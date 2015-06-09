import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ScriptConfigItem from '../ScriptConfigItem';
import Form from '../Form';
import FormGroup from '../FormGroup';
import Editor from '../Editor';
import TextBox from '../TextBox';
import Icon from '../Icon';
import styles from './Config.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class Config {
  static propTypes = {
    config: PropTypes.object,
    onDomainNameChange: PropTypes.func,
    onAddScript: PropTypes.func,
    onRedirectChange: PropTypes.func,
    onRewriteChange: PropTypes.func,
    onSaveClick: PropTypes.func,
    onRemoveScript: PropTypes.func,
    onUpdateScript: PropTypes.func
  };

  onDomainNameChange(e) {
    this.props.onDomainNameChange(e.target.value);
  }

  onSaveClick(e) {
    e.preventDefault();
    this.props.onSaveClick();
  }

  get scripts() {
    if (!this.props.config.scripts || !this.props.config.scripts.length) {
      return (<div>No scripts</div>);
    }

    let scripts = [];
    this.props.config.scripts.map((script, key) => {
      scripts.push(
        <ScriptConfigItem
          key={key}
          id={key}
          script={script}
          onRemoveScript={this.props.onRemoveScript}
          onUpdateScript={this.props.onUpdateScript}/>
      );
    });

    return scripts;
  }

  render() {
    return (
      <Form className="Config">
        <FormGroup>
          <label>Domain</label>
          <TextBox
            type="text"
            onChange={this.onDomainNameChange.bind(this)}
            className="form-control"
            value={this.props.config.domain}
            placeholder="Enter domain" />
        </FormGroup>

        <label>Scripts <Icon type="plus" onClick={this.props.onAddScript}/></label>
        <FormGroup className="CreateConfig-group">
          {this.scripts}
        </FormGroup>

        <FormGroup className="CreateConfig-group">
          <label>Redirects</label>
          <Editor
            id={'redirect-' + this.props.config.id}
            editorValue={this.props.config.redirects || ''}
            onChange={this.props.onRedirectChange}/>
        </FormGroup>

        <FormGroup className="CreateConfig-group">
          <label>Rewrite Rule</label>
          <Editor
            id={'rewrite-' + this.props.config.id}
            editorValue={this.props.config.rewriterule || ''}
            onChange={this.props.onRewriteChange} />
        </FormGroup>

        <button
          type="submit"
          className="btn btn-default CreateConfig-create"
          onClick={this.onSaveClick.bind(this)}>Create</button>
      </Form>
    );
  }
}

export default Config;

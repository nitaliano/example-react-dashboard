import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import TextBox from '../TextBox';
import Icon from '../Icon';
import styles from './ScriptConfigItem.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class ScriptConfigItem {
  static propTypes = {
    id: PropTypes.number,
    script: PropTypes.string,
    onRemoveScript: PropTypes.func,
    onUpdateScript: PropTypes.func
  };

  onRemoveScript() {
    this.props.onRemoveScript(this.props.id);
  }

  onUpdateScript(e) {
    this.props.onUpdateScript(this.props.id, e.target.value);
  }

  render() {
    return (
      <div id={this.props.id} className="ScriptConfigItem">
        <div className="input-group">
          <TextBox
            type="text"
            className="form-control"
            value={this.props.script}
            placeholder="Enter script"
            onChange={this.onUpdateScript.bind(this)} />
          <Icon type="remove" onClick={this.onRemoveScript.bind(this)} className="input-group-addon" />
        </div>
      </div>
    );
  }
}

export default ScriptConfigItem;

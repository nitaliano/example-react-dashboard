import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class FormGroup {
  get formClassNames() {
    return classNames('form-group', 'FormGroup', this.props.className);
  }

  render() {
    return (<div {...this.props} className={this.formClassNames}>{this.props.children}</div>);
  }
}

export default FormGroup;

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Form {
  static propTypes = {
    inline: PropTypes.bool
  };

  get formClassNames() {
    return classNames('Form', { 'form-inline': this.props.inline }, this.props.className);
  }

  render() {
    return (<form {...this.props} className={this.formClassNames}>{this.props.children}</form>);
  }
}

export default Form;

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './TextBox.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

const cssClassname = 'TextBox';

@withStyles(styles)
class TextBox {
  static propTypes = {
    className: PropTypes.string
  };

  get className() {
    return this.props.className ? cssClassname + ' ' + this.props.className : cssClassname;
  }

  render() {
    return (<input {...this.props} className={this.className} />);
  }
}

export default TextBox;

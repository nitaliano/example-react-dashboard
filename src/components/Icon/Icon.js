import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class Icon {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  get iconType() {
    return 'glyphicon glyphicon-' + this.props.type + ' Icon ' + this.props.className;
  }

  render() {
    return (<span {...this.props} className={this.iconType}></span>);
  }
}

export default Icon;

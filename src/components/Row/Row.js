import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Row {
  render() {
    return (<div className={classNames(this.props.className, 'row')}>{this.props.children}</div>);
  }
}

export default Row;

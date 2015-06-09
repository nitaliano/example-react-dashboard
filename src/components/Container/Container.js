import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

class Container {
  render() {
    return (<div className={classNames(this.props.className, 'container')}>{this.props.children}</div>);
  }
}

export default Container;

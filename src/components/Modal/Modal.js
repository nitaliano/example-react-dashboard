import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './Modal.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import Module from '../Module';
import AppActions from '../../actions/AppActions';

@withStyles(styles)
class Modal {
  static propTypes = {
    hidden: PropTypes.bool,
    title: PropTypes.string,
    dialog: PropTypes.string
  };

  onClose() {
    AppActions.hideModal();
  }

  render() {
    return (
      <div className={classNames('Modal', { hidden: this.props.hidden })}>
        <div className="Modal-dialog">
          <div className="Modal-body">
            <Module title={this.props.title}>
              <div className="Modal-info">
                <p>{this.props.dialog}</p>
                <button className="btn btn-default" onClick={this.onClose.bind(this)}>Close</button>
              </div>
            </Module>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

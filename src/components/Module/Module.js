import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './Module.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class Module {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    maxHeight: PropTypes.string,
    cols: PropTypes.string
  };

  get colSize() {
    return 'col-sm-' + (this.props.cols ? this.props.cols : '12');
  }

  get moduleBodyStyle() {
    var bodyStyles = {};

    if (this.props.maxHeight) {
      bodyStyles.maxHeight = +this.props.maxHeight;
    }

    return bodyStyles;
  }

  render() {
    return (
      <div className={this.colSize}>
        <div className="panel panel-primary Module">
          <div className="panel-heading Module-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
          <div className="panel-body Module-body" style={this.moduleBodyStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Module;

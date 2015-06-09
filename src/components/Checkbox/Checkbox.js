import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class Checkbox {
  static propTypes = {
    label: PropTypes.string
  };

  render() {
    return (
      <div className="checkbox Checkbox">
        <label>
          <input {...this.props} type="checkbox" /> {this.props.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import TimeSeries from '../TimeSeries';
import moment from 'moment';

class Report {
  static propTypes = {
    data: PropTypes.array
  };

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  get reportConfig() {
    return {
      title: '',

      tooltipFormatter: function (x, y) {
        return 'Date: ' + moment(x * 1.0e-6).format('MMM Do YYYY') + '<br>Value ' + y;
      },

      xAxisTitle: 'Dates',
      yAxisTitle: 'Values',

      xAxisLabelFormatter: function (x) {
        return moment(x * 1.0e-6).format('MMM Do YYYY');
      },

      data: this.props.data
    };
  }

  render() {
    return (<TimeSeries {...this.reportConfig} />);
  }
}

export default Report;

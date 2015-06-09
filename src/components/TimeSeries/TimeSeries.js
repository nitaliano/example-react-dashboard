import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import Chart from '../Chart';

class TimeSeries {
  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    xAxisTitle: PropTypes.string,
    xAxisLabelFormatter: PropTypes.func,
    yAxisLabelFormatter: PropTypes.func,
    tooltipFormatter: PropTypes.func,
    yAxisTitle: PropTypes.string,
    fillColor: PropTypes.string,
    legend: PropTypes.bool
  };

  get chartConfig() {
    var self = this, config;

    if (!canUseDOM) {
      return { chart: { renderTo: 'TimeSeries' } };
    }

    config = {
      chart: {
        renderTo: 'TimeSeries',
        type: 'area'
      },

      title: {
        text: this.props.title
      },

      legend: {
        enabled: this.props.legend
      },

      xAxis: {
        text: this.props.xAxisTitle || 'X-Axis'
      },

      yAxis: {
        text: this.props.yAxisTitle || 'Y-Axis'
      },

      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
              [0, this.props.fillColor || window.Highcharts.getOptions().colors[0]],
              [1, window.Highcharts.Color(this.props.fillColor || window.Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')] // eslint-disable-line new-cap
            ]
          }
        }
      },

      series: [{ data: this.props.data }]
    };

    if (this.props.xAxisLabelFormatter) {
      config.xAxis.labels = {
        formatter: function () {
          return self.props.xAxisLabelFormatter(this.value);
        }
      };
    }

    if (this.props.yAxisLabelFormatter) {
      config.yAxis.labels = {
        formatter: function () {
          return self.props.uAxisLabelFormatter(this.value);
        }
      };
    }

    if (this.props.tooltipFormatter) {
      config.tooltip = {
        formatter: function () {
          return self.props.tooltipFormatter(this.key, this.y);
        }
      };
    }

    return config;
  }

  render() {
    return (<Chart config={this.chartConfig} />);
  }
}

export default TimeSeries;

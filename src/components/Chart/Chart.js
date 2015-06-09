import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import update from 'react/lib/update';

class Chart extends React.Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.chartNode = null;
  }

  renderChart() {
    if (canUseDOM) {
      new window.Highcharts.Chart(update(this.props.config, { renderTo: { $set: this.chartNode } })); // eslint-disable-line no-new
    }
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    return (<div id={this.props.config.chart.renderTo} className="Chart" ref={(node) => this.chartNode = node } />);
  }
}

export default Chart;

import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    titleText: 'Relevance of Keywords from Raw Data',
    fontSize: 25
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {
              display:this.props.displayTitle,
              text: this.props.titleText,
              fontSize: this.props.fontSize
            },
            legend: {
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />


      </div>
    )
  }
}

export default Chart;

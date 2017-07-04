import React, { Component } from 'react';
import Chart from './Chart.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  //hardcoded values
  getChartData() {
    //make api call here for dynamic data
    this.setState({
      chartData: {
        labels: ['IBM', 'AWS', 'Adobe',
        'Google','Facebook','Microsoft'],
        datasets:[
          {
            label: 'Keyword',
            data:[
              79,
              83,
              15,
              90,
              27,
              74
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(255,99,132,0.6)'
            ]
          }
        ]
      }
    })
  }

  //pass in props to Chart Component
  //to override default values
  //eg legendPosition="bottom"
  //or legendPosition={this.state.legendPosition}
  //for dynamic options

  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1></h1>
        </header>
        <div className="chartArea">
          <Chart chartData={this.state.chartData} legendPosition="bottom" />
        </div>
        <footer className="Footer">
          <h1></h1>
        </footer>
      </div>
    );
  }
}

export default App;

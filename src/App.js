import React, { Component } from 'react';
import Header from './Components/Header/Header'
import DataTable from './Components/DataTable/DataTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import rushingData from './rushing.json';

class App extends Component {
  constructor(props) {
    super(props);
    // Application state that holds the JSON rushing data and the sort directions for each column.
    this.state = {
      data: rushingData,
      direction: {
        yds: 'desc',
        TD: 'desc',
        Lng: 'desc'
      }
    }

    this.sortBy = this.sortBy.bind(this);
    this.convertToInteger = this.convertToInteger.bind(this);
  }

  // sortBy method which is responsible for sorting the data set based on column comparisons.
  sortBy(key) {
    this.setState({
      data: rushingData.sort( (a, b) => 
        // Default state is descending so the method sorts in ascending order first.
        this.state.direction[key] === 'desc'
        ? parseInt(this.convertToInteger(b[key])) - parseInt(this.convertToInteger(a[key]))
        : parseInt(this.convertToInteger(a[key])) - parseInt(this.convertToInteger(b[key]))
        ),
      direction: {
        [key]: this.state.direction[key] === 'desc'
        ? 'asc'
        : 'desc'
      }
    })
  }

  // Converts string scenarios to proper integers for sort comparison.
  convertToInteger(str) {
    let res = str;

    if (typeof str === 'string') {
      // This scenario is encountered in the 'Lng' column.
      if(str.charAt(str.length - 1) === 'T') res = str.substring(0,str.length-1)
      // This scenario is encountered in the 'Yds' column.
      if (str.indexOf(',') > -1) res = str.replace(/,/g,"")
    }

    return res;
  }
  // Render function responsible for rendering out the entire application and its components.
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <DataTable data={this.state.data} sortBy={this.sortBy}/>
      </div>
    )
  }
}

export default App;

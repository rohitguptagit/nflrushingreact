import React, { Component } from 'react';
import Header from './Components/Header/Header'
import DataTable from './Components/DataTable/DataTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import rushingData from './rushing.json';

class App extends Component {
  constructor(props) {
    super(props);
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

  sortBy(key) {
    this.setState({
      data: rushingData.sort( (a, b) => 
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

  convertToInteger(str) {
    let res = str;

    if (typeof str === 'string') {
      if(str.charAt(str.length - 1) === 'T') res = str.substring(0,str.length-1)
      if (str.indexOf(',') > -1) res = str.replace(/,/g,"")
    }

    return res;
  }

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

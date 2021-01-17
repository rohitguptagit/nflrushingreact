import React, { Component } from 'react';
import Header from './Components/Header/Header'
import DataTable from './Components/DataTable/DataTable'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () { 
    return (
      <div>
        <Header />
        <br />
        <br />
        <DataTable />
      </div>
    )
  }
}

export default App;

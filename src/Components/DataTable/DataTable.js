import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

import './DataTable.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from "@fortawesome/free-solid-svg-icons";

import { CSVLink } from 'react-csv';

class DataTable extends Component {

  constructor() {
    super();
    this.state = {
      filter: ''
    };

    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    let filteredData = this.props.data.filter(
      (rushingData) => {
        return rushingData.Player.toLowerCase().trim().indexOf(this.state.filter.toLowerCase().trim()) > -1;
      }
    )
    return (
      <div>
        <CSVLink data={filteredData} filename="Rushing_Yards_Data_Export.csv">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className="exportButton"
            startIcon={<SaveAltIcon />}
          >
            Export as CSV
      </Button>
        </CSVLink>
        <TextField
          onChange={this.setFilter}
          className="alignFilter"
          id="outlined-basic"
          label="Filter by Player Name:"
          variant="outlined"
        />
        <br />
        <br />
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Position</th>
              <th>Att</th>
              <th>Att/G</th>
              <th className='sortable' onClick={() => this.props.sortBy('Yds')}>Yds
            &nbsp;<FontAwesomeIcon icon={faSort} />
              </th>
              <th>Avg</th>
              <th>Yds/G</th>
              <th className='sortable' onClick={() => this.props.sortBy('TD')}>TD
            &nbsp;<FontAwesomeIcon icon={faSort} />
              </th>
              <th className='sortable' onClick={() => this.props.sortBy('Lng')}>LNG
            &nbsp;<FontAwesomeIcon icon={faSort} />
              </th>
              <th>1st</th>
              <th>1st%</th>
              <th>20+</th>
              <th>40+</th>
              <th>FUM</th>
            </tr>
          </thead>
          {
            filteredData.map(rushingData => {
              return (
                <tbody>
                  <tr>
                    <td>{rushingData['Player']}</td>
                    <td>{rushingData['Team']}</td>
                    <td>{rushingData['Pos']}</td>
                    <td>{rushingData['Att']}</td>
                    <td>{rushingData['Att/G']}</td>
                    <td>{rushingData['Yds']}</td>
                    <td>{rushingData['Avg']}</td>
                    <td>{rushingData['Yds/G']}</td>
                    <td>{rushingData['TD']}</td>
                    <td>{rushingData['Lng']}</td>
                    <td>{rushingData['1st']}</td>
                    <td>{rushingData['1st%']}</td>
                    <td>{rushingData['20+']}</td>
                    <td>{rushingData['40+']}</td>
                    <td>{rushingData['FUM']}</td>
                  </tr>
                </tbody>
              )
            })
          }
        </Table>
      </div>
    )
  }
}

export default DataTable

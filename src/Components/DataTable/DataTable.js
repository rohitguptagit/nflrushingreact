import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

import './DataTable.css'

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
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

  // This method sets the component's filter state to that found in the input box (onChange).
  setFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    // Assigns the filtered data to this variable if a (partial) 
    // player name is recognized in the list of players.
    let filteredData = this.props.data.filter(
      (rushingData) => {
        return rushingData.Player.toLowerCase().trim().indexOf(this.state.filter.toLowerCase().trim()) > -1;
      }
    )
    return (
      <div>
        <Container maxWidth={false}>
          {/* Filter box to be rendered on the page. */}
          <TextField
            data-testid="filterBox-test"
            onChange={this.setFilter}
            className="alignFilter"
            id="outlined-basic"
            label="Search Player:"
            variant="outlined"
          />
          {/* Ensures that the filtered data set can be downloaded as a CSV file from the page. */}
          <CSVLink data={filteredData} filename="Rushing_Yards_Data_Export.csv">
            {/* CSV Export button to be rendered on the page. */}
            <Button
              data-testid="exportButton-test"
              variant="contained"
              color="primary"
              size="medium"
              className="exportButton"
              startIcon={<SaveAltIcon />}
            > Export as CSV
            </Button>
          </CSVLink>
        </Container>
        <br />
        <br />
        {/* Complete and populated data table to be rendered on the page. */}
        <Table responsive striped bordered hover variant="dark" data-testid="dataTable-test">
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
          {/* Maps the filtered data set to the table rows iteratively. */}
          {
            filteredData.map((rushingData, i) => {
              return (
                <tbody key={i}>
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

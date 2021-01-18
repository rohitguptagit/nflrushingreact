import React from 'react';
import Table from 'react-bootstrap/Table';
import './DataTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function DataTable(props) {
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Position</th>
          <th>Att</th>
          <th>Att/G</th>
          <th className='sortable' onClick={() => props.sortBy('Yds')}>Yds 
            &nbsp;<FontAwesomeIcon icon={faSort} />
          </th>
          <th>Avg</th>
          <th>Yds/G</th>
          <th className='sortable' onClick={() => props.sortBy('TD')}>TD
            &nbsp;<FontAwesomeIcon icon={faSort} />
          </th>
          <th className='sortable' onClick={() => props.sortBy('Lng')}>LNG 
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
        props.data.map(rushingData => {
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
  )
}

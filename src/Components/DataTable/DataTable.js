import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import RushingData from '../../rushing.json';
import './DataTable.css'

class DataTable extends Component {
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Att</th>
                        <th>Att/G</th>
                        <th>Yds</th>
                        <th>Avg</th>
                        <th>Yds/G</th>
                        <th>TD</th>
                        <th>LNG</th>
                        <th>1st</th>
                        <th>1st%</th>
                        <th>20+</th>
                        <th>40+</th>
                        <th>FUM</th>
                    </tr>
                </thead>
                { RushingData.map(data => {
                    return (
                        <tbody>
                            <tr>
                                <td>{ data['Player'] }</td>
                                <td>{ data['Team'] }</td>
                                <td>{ data['Pos'] }</td>
                                <td>{ data['Att'] }</td>
                                <td>{ data['Att/G'] }</td>
                                <td>{ data['Yds'] }</td>
                                <td>{ data['Avg'] }</td>
                                <td>{ data['Yds/G'] }</td>
                                <td>{ data['TD'] }</td>
                                <td>{ data['Lng'] }</td>
                                <td>{ data['1st'] }</td>
                                <td>{ data['1st%'] }</td>
                                <td>{ data['20+'] }</td>
                                <td>{ data['40+'] }</td>
                                <td>{ data['FUM'] }</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        )
    }
}

export default DataTable;

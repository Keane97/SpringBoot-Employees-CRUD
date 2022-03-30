import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import "./DisplayEmployees.css";

function DisplayEmployees() {

    // const employeeData = { firstName: 'firstName', lastName: 'lastName', email: 'email', aboutMe: 'aboutMe' };
    const [employees, getEmployees] = useState('');
    const URL = 'http://localhost:8080/api/';

    useEffect(() => {
        getAllEmployees();
    }, [])


    const getAllEmployees = () => {
        axios
            .get(`${URL}employees`)
            .then((response) => {
                console.log(response.data);
                getEmployees(response.data);
            }).catch(error => console.error(`Error: ${error}`));
    }

    //pass id through function to update the correct employee
    // const editEmployee = () => {
    //     axios
    //         .put(`http://localhost:8080/api/employees/6`, employeeData)
    //         .then(serverResponse => {
    //             console.log("Status", serverResponse.firstName);
    //             console.log("Data", serverResponse.lastName);
    //         }).catch(error => {
    //             console.error('Something went wrong!', error);
    //         });
    // }


    return (
        <div className='Employee_display'>

          
                {employees ? employees.map(employeeData => {
                    return (
                        <div className='Display_Employee' key={employeeData.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require(`../Assets/images/${employeeData.image}`)} />
                                <Card.Body>
                                    <Card.Title>{employeeData.firstName} {employeeData.lastName}</Card.Title>
                                    <Card.Text>{employeeData.aboutMe}</Card.Text>
                                    <div className="card_footer">
                                        <Button variant="primary">Edit Employee Details</Button>
                                        <Button variant="danger" >Delete Employee Details</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }) : <h3>No data received</h3>}

        </div>
    )
}

export default DisplayEmployees
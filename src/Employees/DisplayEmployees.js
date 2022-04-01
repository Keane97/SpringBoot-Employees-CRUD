import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import { FaUserPlus } from 'react-icons/fa';
import "./DisplayEmployees.css";

function DisplayEmployees() {

    const [employees, getEmployees] = useState('');
    const [employee, getEmployee] = useState('');
    const URL = 'http://localhost:8080/api/';

    useEffect(() => {
        getAllEmployees();
        getEmployee();
    }, [])



    const getAllEmployees = () => {
        axios
            .get(`${URL}employees`)
            .then((response) => {
                console.log(response.data);
                getEmployees(response.data);
            }).catch(error => console.error(`Error: ${error}`));
    }

    const getSingleEmployeeData = (id) => {
        axios
            .get(`${URL}employees/6`) // Replace the 6 with the ID of the user in question. Currently only a placeholder
            .then((response) => {
                console.log(response.data);
                getEmployee(response.data);
            }).catch(error => console.error(`Invalid User ID: ${error}`));
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
                            <Card.Img variant="top" src={employeeData.image ? require(`../Assets/images/${employeeData.image}`) : require("../Assets/images/placeholder.png")} />
                            <div className="card_body">

                            </div>
                            <Card.Body>
                                <Card.Title>{employeeData.firstName} {employeeData.lastName}</Card.Title>
                                <Card.Text >{employeeData.aboutMe}</Card.Text>
                                <div className="card_footer">
                                    <Button variant="primary">Edit Employee Details</Button>
                                    <Button variant="danger" >Delete Employee Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }) : <h3>No data received</h3>}
            <div className="new_Employee">
                <div className="add_svg">
                    <FaUserPlus size={150} color='green' onClick={() => getSingleEmployeeData()} />  {/* "getSingleEmployeeData is a placeholder yet. This is to route the user to the "Add Employee" form page */}
                </div>

            </div>

        </div>
    ) //master return
}

export default DisplayEmployees
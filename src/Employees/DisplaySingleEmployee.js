import React from 'react'

import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import DisplayEmployees from './DisplayEmployees';


function DisplaySingleEmployee() {

    const [employee, getEmployee] = useState('');
    const URL = 'http://localhost:8080/api/';


    useEffect(() => {
        getEmployee();
    }, [])


    const getSingleEmployeeData = (id) => {
        axios
            .get(`${URL}employees/6`) // Replace the 6 with the ID of the user in question. Currently only a placeholder
            .then((response) => {
                console.log(response.data);
                getEmployee(response.data);
            }).catch(error => console.error(`Invalid User ID: ${error}`));
    }

    return (
        <div className='main_container'>
            {employee ? employee.map(employeeData => {
                return (
                    <div className='Display_Employee' key={employeeData.id}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src={employeeData.image ? require(`../Assets/images/${employeeData.image}`) : require("../Assets/images/placeholder.png")} /> */}
                            <div className="card_body">

                            </div>
                            <Card.Body>
                                <Card.Title>{employeeData.firstName} {employeeData.lastName}</Card.Title>
                                <Card.Text >{employeeData.aboutMe}</Card.Text>
                                <div className="card_footer">
                                    <Button variant="primary" onClick={() => getSingleEmployeeData()}>Edit Employee Details</Button>
                                    <Button variant="danger" >Delete Employee Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }) : <Button><Link to="/Home"><h3>No data received</h3></Link></Button>}
        </div>

//<Button onClick={<DisplayEmployees />}><h3>No data received</h3></Button>

    )
}

export default DisplaySingleEmployee
import React, { useEffect, useState } from 'react';
import graphQLFetch from './graphQLFetch.js';
import {    
    useParams,
  } from "react-router-dom";

export default function EmployeeEdit() {
    const { _id } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = () => {
        const query = `
        mutation SingleEmployee($_id: String!) {
            SingleEmployee(_id: $_id) {
                _id
                title
                firstname
                lastname
                age
                dateofjoin
                department
                employeetype
                curentstatus
            } 
        }`;
        graphQLFetch(query, {_id})
            .then(function(data){
                setEmployee(data.SingleEmployee);                
            });
        
    }
    return (
        <div>
            <ul>
                <li><a href="/employees">Home</a></li>
                {' | '}
                </ul>
                <br>
                </br>
                <br>
                </br>
            <tr>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.age}</td>
            <td>{employee.title}</td>
            <td>{employee.department}</td>
            <td>{employee.employeetype}</td>
            <td>{employee.curentstatus}</td>
            </tr>
            </div>
    )
}
import React from 'react';
import {    
    Link
  } from "react-router-dom";
export default function EmployeeRow(props)  {
    const employee = props.employee; 
    // const rowStyle = {border: "1px solid black", padding: 2};          
    return (
        <tr>
        <td><Link to={`/single/${employee._id}`}>{employee.firstname}</Link></td>
        <td>{employee.lastname}</td>
        <td>{employee.age}</td>
        <td>{employee.dateofjoin}</td>
        <td>{employee.title}</td>
        <td>{employee.department}</td>
        <td>{employee.employeetype}</td>
        <td>{employee.curentstatus}</td>
        <td><Link to={`/edit/${employee._id}`}>Update</Link></td>
        <td><Link to={`/delete/${employee._id}`}>delete</Link></td>
            
        </tr>
    ) 
}


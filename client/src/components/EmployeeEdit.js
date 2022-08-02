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
    
    const updateEmployee = (e) => {
        e.preventDefault();
        console.log("--------------------")
        const form = document.forms.editEmployee;
        const employee = {
            id: form.id.value,
            department: form.department.value, 
            title: form.title.value, 
            curentstatus: parseInt(form.curentstatus.value)
        }
        const query = `
        mutation updateEmployee($employee: EmployeeUpdatePayload!) {
            updateEmployee(employee: $employee) {
                    
                    title
                    department
                    curentstatus
 
                } 
        }`;
        const data = graphQLFetch(query, { employee });
        

        form.department.value = ""; 
        form.title.value = "";
        form.curentstatus.value = "";

    };

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
            <h2>{`This is a placeholder for editing employee ${_id}`}</h2>
            <form name="editEmployee" onSubmit={updateEmployee}>
                <input type="hidden" name="id" placeholder="Title" defaultValue={employee._id} />
                <select name="title" placeholder="Title" defaultValue={employee.title} required>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                        </select>
                <input type="number" name="curentstatus" placeholder="curentstatus" defaultValue={employee.curentstatus}  min={0} required/>
                <select name="department" placeholder="Department"  defaultValue={employee.department} required>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                        </select>               
                        <input type="submit" value ="Update"/>
            </form>
        </div>
    )
       
}
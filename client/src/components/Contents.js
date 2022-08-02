import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EmployeeDirectory from './EmployeeDirectory.js';
import EmployeeEdit from './EmployeeEdit.js';
import EmployeeDelete from './EmployeeDelete.js';
import SingleEmployee from './SingleEmployee.js';

const NotFound = () => <h1>Page Not Found</h1>;


export default function Contents() {
    return (
        <Routes>  
            <Route exact path="/" element={<EmployeeDirectory/>} />
            <Route path="/employees" element={<EmployeeDirectory/>} /> 
            <Route path="/edit/:_id" element={<EmployeeEdit/>} />
            <Route path="/delete/:_id" element={<EmployeeDelete/>} />
            <Route path="/single/:_id" element={<SingleEmployee/>} />
            <Route path="/*" element={<NotFound/>} />                      
        </Routes>
    );
}
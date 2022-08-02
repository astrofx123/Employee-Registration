import React, { useEffect, useState } from 'react';
import graphQLFetch from './graphQLFetch.js';
import {    
    useParams,
  } from "react-router-dom";

export default function EmployeeEdit() {
    const { _id } = useParams();
  
    const query = `
        mutation deleteEmployee($_id: String!) {
            deleteEmployee(_id: $_id) {
                _id    
            } 
        }`;
    const data = graphQLFetch(query, {_id});

return (
    <div>
        <ul>
            <li><a href="/employees">Home</a></li>
            {' | '}
            </ul>
            <br></br>
            <br></br>

       <h1>{`Record of employee deleted ${_id}`}</h1>
       </div>
)
   
}
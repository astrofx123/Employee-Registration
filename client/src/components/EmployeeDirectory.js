import EmployeeSearch from "./EmployeeSearch.js";
import EmployeeTable from "./EmployeeTable.js";
import EmployeeCreate from './EmployeeCreate.js';
import graphQLFetch from './graphQLFetch.js';
import URLSearchParams from 'url-search-params';
import React from 'react';


export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();
        this.state = {employees: []};
        this.create = this.create.bind(this);
        
    }
    componentDidMount() {
        let params = window.location.search;
        let queryParams = new URLSearchParams(params);
        let employeetype = queryParams.get("employeetype")
        console.log(employeetype)
        this.loadData(employeetype);
    }

    loadData(employeevalue) {
        
        const query = `query employeeDirectory($employeetype: String) {
         employeeDirectory(employeetype: $employeetype) {
            _id 
            firstname
             lastname
             age
             dateofjoin
             title
             department
             employeetype
             curentstatus
         }
       }`;
       async function EmployeeData(url='', query={}, variables) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ query, variables})
        });
        return response.json();
        }
        let variable = {employeetype: employeevalue}
        const result = EmployeeData('http://localhost:8000/graphql', query,variable)
            .then(result =>{                    
                console.log(result.data.employeeDirectory);
                this.setState({ employees: result.data.employeeDirectory });
                return result.data.employeeDirectory;                   
        })
    }

    async create(employee) {
       
        const query = `
        mutation employeeCreate($employee: EmployeeInputs!) {
                employeeCreate(employee: $employee) {
                    firstname
                    lastname
                    age
                    dateofjoin
                    title
                    department
                    employeetype
                    curentstatus
                } 
        }`;
        const data = await graphQLFetch(query ,{employee});
        if (data)
        {
        this.loadData();
        }
    }
    render() {
        return (
            <div>
                <EmployeeSearch/>
                <hr/>
                <EmployeeTable employees={this.state.employees}/>
                <hr/>
                <EmployeeCreate create={this.create}/>
            </div>
        )
    }
}




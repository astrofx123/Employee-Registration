import EmployeeSearch from "./EmployeeSearch.js";
import EmployeeTable from "./EmployeeTable.js";
import EmployeeCreate from './EmployeeCreate.js';
import graphQLFetch from './graphQLFetch.js';
import React from 'react';


export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();
        this.state = {employees: []};
        this.create = this.create.bind(this);
        
    }
    componentDidMount() {
        this.loadData();
    }

    //asynchronous function wait for setState to execute first
    loadData() {
       
        const query = `query {
         employeeDirectory {
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
       async function EmployeeData(url='', data={}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ query })
        });
        return response.json();
        }

        const result = EmployeeData('/graphql', query)
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

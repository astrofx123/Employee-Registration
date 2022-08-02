import React from 'react';
class EmployeeSearch extends React.Component {
    render() {
        return (
            <div>
                <ul>
                <li><a href="/employees">All Employees</a></li>
                {' | '}
               <li> <a href="/employees?employeetype=FullTime">Employee With FullTime </a> </li>
                {' | '}
                <li><a href="/employees?employeetype=PartTime">Employee With PartTime </a></li>
                {' | '}
                <li><a href="/employees?employeetype=Contract">Employee With Contract </a></li>
                {' | '}
                <li><a href="/employees?employeetype=Seasonal">Employee With Seasonal</a></li>
                </ul>
            </div>
        )
    }
}

export default EmployeeSearch;
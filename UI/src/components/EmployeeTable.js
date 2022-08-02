import EmployeeRow from "./EmployeeRow.js";

export default class EmployeeTable extends React.Component {
    render() {     
        const EmployeeRows = this.props.employees.map(employee => <EmployeeRow key={employee.id} employee={employee}/>)
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Date of Joining</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Employee Type</th>
                        <th>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeRows}
                </tbody>
            </table>
        )
    }
}
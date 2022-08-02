export default function EmployeeRow(props)  {
    const employee = props.employee; 
    // const rowStyle = {border: "1px solid black", padding: 2};          
    return (
        <tr>
        <td>{employee.firstname}</td>
        <td>{employee.lastname}</td>
        <td>{employee.age}</td>
        <td>{employee.dateofjoin}</td>
        <td>{employee.title}</td>
        <td>{employee.department}</td>
        <td>{employee.employeetype}</td>
        <td>{employee.curentstatus}</td>
        </tr>
    ) 
}
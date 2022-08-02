export default class EmployeeCreate extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.employeeCreate;
        const employee = {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            age:parseInt(form.age.value),
            dateofjoin:form.dateofjoin.value,
            title:form.title.value,
            department:form.department.value,
            employeetype:form.employeetype.value,
            curentstatus:1,
        }
        this.props.create(employee);
        form.firstname.value = "";
        form.lastname.value = "";
        form.age.value = "";
        form.dateofjoin.value = "";
        form.title.value = "";
        form.department.value = "";
        form.employeetype.value = "";   
    }

    render() {            
        return (
            <form name="employeeCreate" onSubmit={this.handleSubmit}>
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
                <input type="number" name="age" placeholder="Age" />
                <input type="date" name="dateofjoin" placeholder="Date of join" />
                        <select name="title" placeholder="Title">
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                        </select>
                <select name="department" placeholder="Department">
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                        </select>
                        <select name="employeetype" placeholder="Employee Type">
                        <option value="FullTime">Full Time</option>
                        <option value="PartTime">Part Time</option>
                        <option value="Seasonal">Seasonal</option>
                        <option value="Contract">Contract</option>
                        </select>
                <input type="submit" value ="Submit"/>
            </form>
        )
    }
}

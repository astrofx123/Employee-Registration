import EmployeeSearch from "./EmployeeSearch.js";
import EmployeeTable from "./EmployeeTable.js";
import EmployeeCreate from './EmployeeCreate.js';
import graphQLFetch from './graphQLFetch.js';

export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();
        this.state = {employees: []};
        this.create = this.create.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {   
         
        let employeetype = "FullTime";
        const query = `query employeeDirectory($employeetype: String) {
            employeeDirectory(employeetype: $employeetype) {
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
        async function EmployeeData(url='', query, data) {
            let data1 = {employeetype: "FullTime"};
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ query, data1 })
            });
            return response.json();
        }
        let data = {employeetype: "FullTime"};
        const result = EmployeeData('/graphql', query, {data})
            .then(result =>{
                this.setState({employees : result.data.employeeDirectory})
                return result.data.employeeDirectory;                   
        })

    }
    async createEmployee(employee) {
        const query = `
        mutation employeeCreate($employee: IssueInputs!) {
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
        const data = await graphQLFetch(query, { employee });
        if (data) {
            this.loadData();
        }  

    }
    render() {            
        return (
            <React.Fragment> 
                <EmployeeSearch/>
                <hr/>
                <EmployeeTable employees={this.state.employees}/>
                <hr/>
                <EmployeeCreate create={this.create}/>                   
            </React.Fragment>

        ) 
    }
}








   
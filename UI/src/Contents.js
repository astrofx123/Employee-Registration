import EmployeeDirectory from './components/EmployeeDirectory.js';
const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
return (
    <Switch>
        <Redirect exact from="/" to="/employees" />
        <Route path="/employees" component={EmployeeDirectory} />
        <Route component={NotFound} />
    </Switch>
);
}
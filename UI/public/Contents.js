import EmployeeDirectory from './components/EmployeeDirectory.js';
const NotFound = () => /*#__PURE__*/React.createElement("h1", null, "Page Not Found");

export default function Contents() {
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
    exact: true,
    from: "/",
    to: "/employees"
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/employees",
    component: EmployeeDirectory
  }), /*#__PURE__*/React.createElement(Route, {
    component: NotFound
  }));
}
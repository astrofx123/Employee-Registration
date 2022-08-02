import Contents from '../Contents.js';
function NavBar() {
return (
    <nav>
        <ul>
        <a href="/">Home</a>
            {' | '}
        <a href="/#/employees">Employee List</a>
        </ul>
    </nav>
    );
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    );
}
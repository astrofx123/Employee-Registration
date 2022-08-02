import Contents from './Contents.js';
function NavBar() {
return (    
    <nav>
        <ul>
        <Link to="/">Home</Link>
            {' | '}
        <Link to="/employees">Employee List</Link> 
        </ul>   
    </nav>
    );
}

export default function Page() {
    return (
        <Router>
            <div>
                <NavBar />
                <Contents />
            </div>
        </Router>  
    );
}
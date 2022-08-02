import {BrowserRouter as Router, Link} from "react-router-dom";
import Contents from './Contents.js';
function NavBar() {
return (    
    <nav>
        <ul>
           
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
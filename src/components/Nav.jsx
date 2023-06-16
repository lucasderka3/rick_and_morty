import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
import "./Nav.css";

const Nav = ({ onSearch }) => {
    return(
        <nav className="nav">
            <Link to='/home'>
                <button>Home</button>
            </Link>
            
            <SearchBar onSearch={onSearch}/>
            
            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
}

export default Nav;
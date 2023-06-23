import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return(
            
        <nav className={styles.nav}>
            <Link to='/home'>
                <button className={styles.boton1}>Home</button>
            </Link>
            
            <Link to='/favorites'>
                <button className={styles.boton1}>Favorites</button>
            </Link>
            
            <SearchBar onSearch={onSearch}/>

            
            <Link to='/about'>
                <button className={styles.boton2}>About</button>
            </Link>
        </nav>
        
    )
}

export default Nav;
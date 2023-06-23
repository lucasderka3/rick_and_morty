import { useState } from "react";
import styles from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   
   return(
      <div className={styles.container}>
         {
            <>
            <input type="search" onChange={handleChange} value={id} placeholder="Ingresar ID"></input>
            <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
            </>
         }
      </div>
   );
}

export default SearchBar; 
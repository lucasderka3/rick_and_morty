import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Detail from './components/Detail';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            const char = characters.find((ch) => ch.id === Number(id))
            if(char) return alert('El personaje ya existe')
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         
         <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
         
      </div>
   );
}

export default App;

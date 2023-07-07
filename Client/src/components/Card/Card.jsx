import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return(
      <div>
         {
            <div className={styles.card}>
               
               <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
            
               <button onClick={() => onClose(id)} className={styles.close}>X</button>
              
               <div className={styles.info}>
                     <h2 className={styles.nombre}>{name}</h2>
                     <h2>{status}</h2>
                     <h2 className={styles.especies}>{species}</h2>
                     <h2 className={styles.genero}>{gender}</h2>
                     <h2>{origin}</h2>
                  <Link to={`/detail/${id}`}>
                     <img src={image} alt='' />
                  </Link>
               </div>
            </div>
         }
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

   
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => { dispatch( addFav(character)) },
      removeFav: (id) => { dispatch( removeFav(id)) }
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card);






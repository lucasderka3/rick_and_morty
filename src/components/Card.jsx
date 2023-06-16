import { Link } from 'react-router-dom';

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
   return(
      <div>
         {
            <div>
               <button onClick={() => onClose(id)}>X</button>
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
                  <h2>{status}</h2>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
                  <h2>{origin}</h2>
                  <img src={image} alt='' />
               </Link>
            </div>
         }
      </div>
   )
}

export default Card






import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

//UNICAMENTE para conectar mi App con la extension redux devtools del navegador.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,    
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea sirve para q podamos hacer peticiones a una Api/servidor
    );

export default store;
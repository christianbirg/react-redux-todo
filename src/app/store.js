import { createStore } from 'redux';


import reducer from './todos/reducers';
import middleware from './todos/middlewares';

export default createStore(reducer, middleware);

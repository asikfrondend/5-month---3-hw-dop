import { createStore } from 'redux';
import gameReducer from '../redusers/reduser';

const store = createStore(gameReducer);

export default store;

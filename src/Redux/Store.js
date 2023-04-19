import {createStore} from 'redux';
import BookReducer from './Bookreducer';

const store = createStore(BookReducer)

export default store;


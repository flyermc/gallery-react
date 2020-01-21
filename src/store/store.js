import { createStore } from 'redux';
import galleryReducer from './reducers';

let store = createStore(galleryReducer);

export default store;

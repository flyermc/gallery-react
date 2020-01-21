import { compose, createStore } from 'redux';
import galleryReducer from './reducers';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = null;
}

function configureStore() {
    const store = createStore(
        galleryReducer,
        compose(
            devTools,
        )
    );
    return store;
}
export default configureStore;

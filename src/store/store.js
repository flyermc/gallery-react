import { compose, createStore, applyMiddleware } from 'redux';
import galleryReducer from './reducers';
import imagesSaga from '../sagas/saga';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = null;
}

function configureStore() {
    const store = createStore(
        galleryReducer,


            applyMiddleware(sagaMiddleware),

    );
    sagaMiddleware.run(imagesSaga);
    
    return store;
}
export default configureStore;

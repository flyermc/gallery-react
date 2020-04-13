import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import galleryReducer from './reducers';
import imagesSaga from '../sagas/saga';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
    const store = createStore(
        galleryReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        ),
    );
    sagaMiddleware.run(imagesSaga);
    
    return store;
}
export default configureStore;

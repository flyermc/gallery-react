import { compose, createStore, applyMiddleware } from 'redux';
import galleryReducer from './reducers';
import imagesSaga from '../sagas/saga';
import createSagaMiddleware from 'redux-saga';

const isDevMode = process.env.NODE_ENV !== 'production';

const initStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let enhancer = null;

    const enhancers = [applyMiddleware(sagaMiddleware)];

    if (isDevMode && window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancer = compose(
            ...enhancers,
            window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
        );
    } else {
        enhancer = compose(...enhancers);
    }

    const initialState = {};

    const store = createStore(galleryReducer, initialState, enhancer);

    sagaMiddleware.run(imagesSaga);
    return store;
};

function configureStore() {
    return initStore();
}

export default configureStore;

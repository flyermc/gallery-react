import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { Provider } from 'react-redux';
import { ImageContainer } from './containers';

import configureStore from './store/store';
import { createStore } from 'redux';
import galleryReducer from './store/reducers';

const store = configureStore();
const store1 = createStore(galleryReducer);

function App() {
    return (
            <Provider store={store}>
            <div className="App">
            <header className="App-header">
            <ImageContainer />
            </header>
            </div>
            </Provider>
  );
}

const mapStateToProps = state => {
    return {
        currentImage: state.currentImage,
    }
}

Image.propTypes = {
    currentImage: PropTypes.string,
}

export default App;

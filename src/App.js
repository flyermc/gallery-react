import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { Provider } from 'react-redux';
import { ImageContainer } from './containers';

import configureStore from './store/store';

const store = configureStore();

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

Image.propTypes = {
    currentImage: PropTypes.string,
}

export default App;

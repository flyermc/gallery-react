import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ImageContainer } from './containers';

import configureStore from './store/store';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                  <Router>
                    <Switch>
                      <Route exact path="/" component={ImageContainer} />
                      <Route path="/image" component={ImageContainer} />
                      <Route component={ImageContainer} />
                    </Switch>
                  </Router>
                </header>
            </div>
        </Provider>
    );
}

Image.propTypes = {
    currentImage: PropTypes.string,
}

export default App;

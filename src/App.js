import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { Image } from './components/image';

import configureStore from './store/store';

const store = configureStore();

function App() {
    return (
            <Provider store={store}>
    <div className="App">
      <header className="App-header">
          <Image image_src="https://lh3.googleusercontent.com/-LbvS6uL7FQw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcw6rdu5ZUEoC_3pbTzOQRDr6B5Jg.CMID/s64-c/photo.jpg"/>
          <Image image_src="https://lh3.googleusercontent.com/-LbvS6uL7FQw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcw6rdu5ZUEoC_3pbTzOQRDr6B5Jg.CMID/s64-c/photo.jp" />
      </header>
            </div>
            </Provider>
  );
}

export default App;

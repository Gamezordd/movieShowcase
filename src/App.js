import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import {Provider} from 'react-redux';
import {ConfigureStore} from './Components/redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Main />
      </div>
    </Provider>
  );
}

export default App;

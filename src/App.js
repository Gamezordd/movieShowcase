import React from 'react';
import './App.css';
import Main from './Components/MainComponent'
import {Provider} from 'react-redux';
import {ConfigureStore} from './Components/redux/configureStore';
import Header from './Components/HeaderComponent'

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Main />
    </Provider>
  );
}

export default App;

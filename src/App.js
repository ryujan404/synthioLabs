import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Chat from './components/pages/Chat';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;

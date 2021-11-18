import './App.css';
import React from 'react';
import Taskfield from './components/Taskfield';
import { Provider } from 'react-redux';
import store from './Store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Taskfield />
      </Provider>
    </div>
  );
}

export default App;

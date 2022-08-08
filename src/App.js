import React from 'react';
import logo from './logo.svg';
import { List } from './features/list/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List/>
      </header>
    </div>
  );
}

export default App;

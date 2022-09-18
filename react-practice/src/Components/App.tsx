import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import CanvasFrame from './CanvasFrame/CanvasFrame'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <CanvasFrame />
    </div>
  );
}

export default App;

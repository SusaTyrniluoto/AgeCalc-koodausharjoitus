import React from 'react';
import logo from './logo.svg';
import './App.css';
import AgeCalculator from './AgeCalculator';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div className="App">
        <h1>IKÄVUOSILASKURI</h1>
          <AgeCalculator />
        </div>
        
      </header>
    </div>
  );
}

export default App;

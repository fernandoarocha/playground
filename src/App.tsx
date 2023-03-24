import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {feetToCent(50,1)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export const feetToCent = (feet: number, inch: number) => {
  if (feet < 0){
    console.log('Please enter a feet value greater than 0!')
    return
  }
  if (inch < 0 || inch > 12){
    console.log('Please enter an inches value between 0 and 12!')
    return
  }

  const feetToInch = feet * 12
  const totalInch = feetToInch + inch
  const centimeters = (totalInch * 2.54).toFixed(2)
  let isPlural = 'es'

  if (inch === 1){
    isPlural = ''
  }

  return `${feet} feet and ${inch} inch${isPlural} is equal to ${centimeters} centimeters`
}

export default App;

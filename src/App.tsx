import React from 'react';
import logo from './logo.svg';
import './App.css';

dotenv.config();

function App(): JSX.Element {
  console.log(process.env.REACT_APP_GUARDIAN_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello World</h3>
      </header>
    </div>
  );
}

export default App;

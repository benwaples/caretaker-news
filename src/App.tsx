import React from 'react';
import './App.css';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/.env` });

function App(): JSX.Element {
  console.log(
    process.env.REACT_APP_GUARDIAN_KEY
      ? process.env.REACT_APP_GUARDIAN_KEY
      : 'fail'
  );
  return (
    <div className="App">
      <header className="App-header">
        <h3>Bens World</h3>
      </header>
    </div>
  );
}

export default App;

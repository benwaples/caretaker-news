import React from 'react';
import * as dotenv from 'dotenv';
import './App.css';

import NewsSearch from '../../container/NewsSearch';

import Header from '../header/Header';

dotenv.config();

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <NewsSearch />
    </div>
  );
}

export default App;

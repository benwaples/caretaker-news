import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD:src/App.tsx
=======
import * as dotenv from 'dotenv';
import NewsSearch from '../../container/NewsSearch';
>>>>>>> a2cfaf0... update search:src/components/app/App.tsx

dotenv.config();

function App(): JSX.Element {
  return (
    <div className="App">
      <NewsSearch />
    </div>
  );
}

export default App;

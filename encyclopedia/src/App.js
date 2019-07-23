import React from 'react';
import { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';

function App() {
  // const [state, setState] = useState();

  // const {searchField,OTHERSTATENEEDED}=state;
  // const filteredMovies = 

  return (
    <div className='App'>
      <input type="search" placeholder="search" onChange={e=>setState({searchField:e.target.value})}/> 
      <MoviesList />
    </div>
  );
}

export default App;

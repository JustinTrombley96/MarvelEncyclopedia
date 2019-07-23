import React from 'react';
import { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import { data } from './data';

function App() {
  const [moviesList, setMoviesList] = useState(data);
  console.log(moviesList);

  // const {searchField,OTHERSTATENEEDED}=state;
  // const filteredMovies =

  return (
    <div className='App'>
      <input
        type='search'
        placeholder='search'
        // onChange={e => setState({ searchField: e.target.value })}
      />
      <MoviesList moviesList={moviesList} />
    </div>
  );
}

export default App;

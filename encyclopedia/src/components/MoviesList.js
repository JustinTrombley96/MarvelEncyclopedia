import React from 'react';
import Movie from './Movie';

export default function MoviesList(props) {
  console.log('movielistprops', props);
  return (
    <div>
      {props.moviesList.map(movie => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

import React from 'react';

export default function MoviesList(props) {
  return (
    <div>
      {props.MoviesList.map(movie => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

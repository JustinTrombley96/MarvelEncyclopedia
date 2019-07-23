import React from 'react';

export default function Movie(props) {
  console.log('moviejs', props);
  return (
    <div>
      <h1>Marvel Encyclopedia</h1>
      <h3>{props.title}</h3>
      {props.releaseDate}
      {props.description}
    </div>
  );
}

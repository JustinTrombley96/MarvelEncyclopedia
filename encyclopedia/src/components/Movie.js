import React from 'react';

export default function Movie(props) {
	console.log('moviejs', props);
	return (
		<div>
			{console.log(props)}
			<h3>{props.movie.title}</h3>
			<h5>Release Date: {props.movie.releaseDate}</h5>
      <h5>Description: {props.movie.description}</h5>
      <h5>Film Release Order: {props.movie.releaseOrder}</h5>
      <h5>Film Chronological Order: {props.movie.chronologicalOrder}</h5>
      <h5>Starring: {props.movie.starring}</h5>
      <h5>Director: {props.movie.director}</h5>
      <h5>Phase: {props.movie.phase}</h5>
		</div>
	);
}

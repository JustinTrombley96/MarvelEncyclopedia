import React from 'react';

export default function Movie(props) {
  return (
    <div>
      {props.movie}
      {props.release}
    </div>
  );
}

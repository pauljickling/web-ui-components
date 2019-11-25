import React from 'react';

export default function Link(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
  );
}

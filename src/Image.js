import React from 'react';

export default function Image(props) {
  return (
    <div className={`aspect-ratio-${props.aspectRatio}`}>
      <img className="aspect-ratio-image"
           src={props.link} 
           alt={props.text}/>
    </div>
  );
}

import React from 'react';
import Image from './Image';
import Sample from './sample.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Standard Image</p>
        <img src={Sample} alt="Unaltered landscape" />
        <p>4:3 Image</p>
        <Image aspectRatio="43" link={Sample} text="4:3 landscape" />
        <p>16:9 Image</p>
        <Image aspectRatio="169" link={Sample} text="16:9 landscape" />
      </div>
    </div>
  );
}

export default App;

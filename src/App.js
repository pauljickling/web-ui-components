import React from 'react';
import Image from './Image';
import Sample from './sample.jpg';

function App() {
  return (
    <div className="App">
      <p>Standard Image</p>
      <img src={Sample} alt="Unaltered landscape" />
      <p>4:3 Image</p>
      <Image aspectRatio="43" link={Sample} text="4:3 landscape" />
      <p>16:9 Image</p>
      <Image aspectRatio="169" link={Sample} text="16:9 landscape" />
    </div>
  );
}

export default App;

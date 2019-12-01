import React from 'react';
import Image from './Image';
import Sample from './sample.jpg';
import List from './List';
import ListItem from './ListItem';

function listCount(item) {
  let count = item.props.children.length;
	return <p>{count}</p>;
}

function App(props) {
  return (
    <div className="App">
      <div className="container">
        {listCount(
        <List> 
          <ListItem text="1" />
          <ListItem text="2" />
          <ListItem text="3" />
        </List>)}

        <List> 
          <ListItem text="1" />
          <ListItem text="2" />
          <ListItem text="3" />
          <ListItem text="4" />
        </List>

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

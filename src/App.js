import React from 'react';

function Food(props){
  return<h1>I like {props.favorite}</h1>
}

function App() {
  return (
    <div className="App">
     hello 
     <Food favorite = "kimchi" />
     <Food favorite = "samgiopsal" />
     <Food favorite = "chukumi" />
    </div>
  );
}

export default App;

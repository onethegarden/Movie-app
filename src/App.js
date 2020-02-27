import React from 'react';
import PropTypes from 'prop-types';


/*
state
React automatically is going excute render method function of my class component
*/
class App extends React.Component{
  state = {
    count : 0
  }
  add =()=>{
    console.log("add");
  };
  minus =()=>{
    console.log("minus");
  };
  render(){
    return(
      <div>
        <h1>The number is  {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      );
  }
}

export default App;

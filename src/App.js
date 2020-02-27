import React from 'react';
import axios from 'axios';

/*
state
React automatically is going excute render method function of my class component

every time you call setState react going to call rerender function with new State

construcor() when a component show up on the screen then, render()
https//yts-proxy.now.sh/list_movies.json

*/
class App extends React.Component{
  state={
    isLoading : true,
    movies: []
  };
  getMovies = async() =>{
    const {
      data:{
        data:{movies}
      }
    } = axios.get("https//yts-proxy.now.sh/list_movies.json");
    this.setState({movies:movies})
  };
  componentDidMount(){
      this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading? "Loading": "We are ready"} </div>;
  
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
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
  getMovies = async () =>{
    const {
      data:{
        data:{ movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState( { movies, isLoading:false } );
  };
  componentDidMount(){
      this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section>
        {isLoading
          ? (
            <div class="loader">
              <span class="loader_text">Loading</span>
            </div>
          )
          : (
            <div class="movies">
             {movies.map(movie=>(
            <Movie 
              key ={movie.id}
              id = {movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              />
            ))} 
          </div>
          )
        }
      </section>
    )        
  }
}

export default App;

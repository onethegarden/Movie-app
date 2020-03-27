import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component{
  state={
    isLoading : true,
    movies: []
  };
  getMovies = async () =>{
    const {
      data:{
        data:{ movies }
      }
    } = await axios.get(
       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
    this.setState( { movies, isLoading:false } );
  };
  componentDidMount(){
      this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )        
  }
}

export default Home;

/*
state
React automatically is going excute render method function of my class component
every time you call setState react going to call rerender function with new State
construcor() when a component show up on the screen then, render()
https//yts-proxy.now.sh/list_movies.json
*/
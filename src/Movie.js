import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movies({id, year, title, summary, poster}){
    return<div>
        <img src={poster} alt={title} title={title}/>
        <div class="movie_data">
            <h3 class="movie_title" >{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>;
}
Movies.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

export default Movies;
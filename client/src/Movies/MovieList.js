import React from "react";
import Movie from "./Movie";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Movie>
          <MovieDetails key={movie.id} movie={movie} />
        </Movie>
      ))}
    </div>
  );
};

function MovieDetails(props) {
  //{ movie })
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <Movie />
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
export { MovieDetails };
export default MovieList;

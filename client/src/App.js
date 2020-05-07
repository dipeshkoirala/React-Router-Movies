import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
//import { MovieDetails } from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:5000/api/movies`)
        .then((response) => {
          setMovieList(response.data);

          console.log(response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };
  // console.log(addToSavedList());
  return (
    <div>
      <SavedList list={savedList} />
      {/* Replaced <div> Replace this Div with your Routes</div> */}
      <MovieList movies={movieList} />
      <Movie />
      <Route exact path="/" component={MovieList} />
      <Route path="/Movies/:id" component={Movie} />
    </div>
  );
};

export default App;

import { createContext, useState } from "react";
import movieData from "../shared/Movies.json";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(movieData);
  const [updatedMovies, setUpdatedMovies] = useState(movieData);
  const [favourites, setFavourites] = useState([]);

  const allGenres = movieData.map((movie) => movie.genre);
  const genres = new Set(allGenres);

  const filterMovies = (genre) => {
    if (genre) {
      const filteredMovies = updatedMovies.filter(
        (movie) => movie.genre === genre
      );
      setMovies(filteredMovies);
    } else {
      setMovies(updatedMovies);
    }
  };

  const addToFavourites = (id) => {
    const isFav = favourites.find((movie) => movie.id === id);
    if (isFav) {
      setFavourites(() => favourites.filter((movie) => movie.id !== id));
    } else {
      const favMovie = updatedMovies.filter((movie) => movie.id === id);
      setFavourites((prevState) => [...prevState, favMovie[0]]);
    }
  };

  const removeMovie = (id) => {
    const removedMovie = updatedMovies.filter((movie) => movie.id !== id);
    const removedFromFavs = favourites.filter((movie) => movie.id !== id);
    setUpdatedMovies(removedMovie);
    setMovies(removedMovie);
    setFavourites(removedFromFavs);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        genres,
        favourites,
        filterMovies,
        addToFavourites,
        removeMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;

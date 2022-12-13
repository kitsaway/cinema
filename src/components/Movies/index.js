import * as React from "react";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import MovieContext from "./../../context/MovieContext";
import Movie from "../Movie";

const Movies = () => {
  const { movies } = useContext(MovieContext);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {movies.map((movie) => (
        <Grid item xs={2} sm={4} md={4} key={movie.id}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;

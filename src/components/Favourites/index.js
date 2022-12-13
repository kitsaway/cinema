import * as React from "react";
import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MovieContext from "./../../context/MovieContext";
import Movie from "../Movie";

const Favourites = () => {
  const { favourites } = useContext(MovieContext);
  return (
    <Container sx={{ mt: 3 }}>
      {favourites.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {favourites.map((movie) => (
            <Grid item xs={2} sm={4} md={4} key={movie.id}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ color: "#909090", textAlign: "center" }}>
          No favourite movies yet
        </Typography>
      )}
    </Container>
  );
};

export default Favourites;

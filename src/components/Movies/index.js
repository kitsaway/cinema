import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import MovieContext from "./../../context/MovieContext";
import Movie from "../Movie";
import AppPagination from "../Pagination";

const Movies = () => {
  const { movies } = useContext(MovieContext);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentMovies(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, movies]);

  return (
    <>
      {currentMovies.length > 0 ? (
        <>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {currentMovies.map((movie) => (
              <Grid item xs={2} sm={4} md={4} key={movie.id}>
                <Movie movie={movie} />
              </Grid>
            ))}
          </Grid>
          <AppPagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        </>
      ) : (
        <Typography sx={{ color: "#909090", textAlign: "center" }}>
          No Movies Found
        </Typography>
      )}
    </>
  );
};

export default Movies;

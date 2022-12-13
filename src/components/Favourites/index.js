import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MovieContext from "./../../context/MovieContext";
import Movie from "../Movie";
import AppPagination from "../Pagination";

const Favourites = () => {
  const { favourites } = useContext(MovieContext);
  const [currentFavs, setCurrentFavs] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % favourites.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentFavs(favourites.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(favourites.length / itemsPerPage));
  }, [itemOffset, favourites]);
  return (
    <Container sx={{ mt: 3 }}>
      {currentFavs.length > 0 ? (
        <>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {currentFavs.map((movie) => (
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
          No favourite movies yet
        </Typography>
      )}
    </Container>
  );
};

export default Favourites;

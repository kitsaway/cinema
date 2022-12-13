import { useParams } from "react-router-dom";
import Movie from "../Movie";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import { Container } from '@mui/material';

const Details = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.filter((movie) => movie.id === id);
  return (
    <Container sx={{ m: 3}}>
      <Movie movie={movie[0]} />
    </Container>
  );
};

export default Details;

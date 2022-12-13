import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieContext from "../../context/MovieContext";

const Movie = ({ movie: { id, title, genre, rate } }) => {
  const { removeMovie } = useContext(MovieContext);
  return (
    <Card sx={{ minWidth: 155 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{genre}</Typography>
        <Typography
          sx={{
            mb: 0.5,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {rate} <GradeIcon />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FavoriteBorderIcon />
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#E60000",
            color: "#fff",
            "&:hover, &:focus": { backgroundColor: "#E60000", color: "#fff" },
          }}
          onClick={() => removeMovie(id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;

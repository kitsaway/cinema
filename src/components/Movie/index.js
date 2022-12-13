import * as React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieContext from "../../context/MovieContext";

const Movie = ({ movie: { id, title, genre, rate } }) => {
  const { addToFavourites, removeMovie } = useContext(MovieContext);
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };
  return (
    <Card sx={{ minWidth: 155 }}>
      <CardContent>
        <Link
          to={`/${id}`}
          style={{ textDecoration: "none", color: "#1B2330" }}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Link>
        <Typography sx={{ mb: 1.5, color: "#808080" }}>{genre}</Typography>
        <Typography
          sx={{
            mb: 0.5,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          variant="body2"
        >
          {rate} <GradeIcon />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleFavourite();
            addToFavourites(id);
          }}
        >
          {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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

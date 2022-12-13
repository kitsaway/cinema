import * as React from "react";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MovieContext from "../../context/MovieContext";

const Filter = () => {
  const { genres, filterMovies } = useContext(MovieContext);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <List
          sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick} sx={{ color: "#1B2330" }}>
            <ListItemText
              primary={<Typography variant="h3">Filter</Typography>}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleClick();
                  filterMovies(null);
                }}
              >
                <ListItemText
                  primary={<Typography variant="body2">All Genres</Typography>}
                />
              </ListItemButton>
              {[...genres].map((genre) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={genre}
                  onClick={() => {
                    handleClick();
                    filterMovies(genre);
                  }}
                >
                  <ListItemText
                    primary={<Typography variant="body2">{genre}</Typography>}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
      <Box sx={{ mb: 1, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <MenuList
          dense
          sx={{ display: "flex", flexDirection: "row", float: "left" }}
        >
          <MenuItem onClick={() => filterMovies(null)}>
            <ListItemText>All Genres</ListItemText>
          </MenuItem>
          {[...genres].map((genre) => (
            <MenuItem key={genre} onClick={() => filterMovies(genre)}>
              <ListItemText>{genre}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Box>
    </>
  );
};

export default Filter;

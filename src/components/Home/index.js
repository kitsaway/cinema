import { Container } from "@mui/material";
import Movies from "../Movies";
import Filter from "../Filter";

const Home = () => {
  return (
    <Container
      sx={{ mt: 3 }}
    >
      <Filter />
      <Movies />
    </Container>
  );
};

export default Home;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Movies />}></Route>
        <Route exact path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

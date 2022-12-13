import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { MovieProvider } from "./context/MovieContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Details from "./components/Details";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";

const App = () => {
  return (
    <UserProvider>
      <MovieProvider>
        <Router>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route exact path="/favourites" element={<Favourites />}></Route>
            <Route exact path="/:id" element={<Details />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </MovieProvider>
    </UserProvider>
  );
};

export default App;

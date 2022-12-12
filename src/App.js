import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";
import SignIn from './components/SignIn/index';
import SignUp from './components/SignUp/index';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Movies />}></Route>
          <Route exact path="/favourites" element={<Favourites />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail"; 
import About from "../pages/About"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

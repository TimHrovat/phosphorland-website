import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Traps from "./pages/Traps";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Smart Traps</Link>
        <Link to="/home">Home</Link>
        <Link to="/traps">Traps</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log in</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/traps" element={<Traps />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Traps from "./pages/Traps";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <div className="logo">
          <Link to="/">Smart Traps</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>{" "}
          </li>
          <li>
            <Link to="/traps">Traps</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
        <div className="burger">
          <div class="line1"></div>
          <div class="line1"></div>
          <div class="line1"></div>
        </div>
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

// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AddTrap from "./pages/AddTrap";
import UploadImg from "./pages/UploadImg";
import "./styles.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import en from "./assets/flag_icons/en.svg";
import pt from "./assets/flag_icons/pt.svg";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  const [lang, changeLang] = useState({ language: "en", image: pt });

  const handleClick = (e) => {
    let lng;
    if (lang.language === "en") {
      lng = { language: "pt", image: en };
    } else {
      lng = { language: "en", image: pt };
    }
    console.log(lng);
    changeLang((lang) => ({ ...lng }));
    console.log(lang);
    i18n.changeLanguage(lng.language);
  };

  return (
    <Router>
      <button className="translate-button" onClick={(e) => handleClick(e)}>
        <img src={lang.image} alt={"Set language to: " + lang.language}></img>
      </button>

      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtrap" element={<AddTrap />} />
          <Route path="/uploadimg" element={<UploadImg />} />
          <Route path="/dashboard" element={<PrivateRoute />} />
          <Route path="/confirmemail" element={<PrivateRoute />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

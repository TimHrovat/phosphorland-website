import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./dashboard-navbar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import firebase from "firebase/compat/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";

export default function DashboardNavbar(props) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");
  const [burgerClicked, setBurgerClicked] = React.useState(false);

  const db = getDatabase();
  const uid = firebase.auth().currentUser.uid;
  const [snapChildren, setSnapChildren] = React.useState([]);

  async function handleSignOut() {
    try {
      setLoading(true);
      await logout();
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function addTrap() {
    navigate("/addtrap");
  }

  function handleClick() {
    setBurgerClicked(!burgerClicked);
  }

  useEffect(() => {
    // eslint-disable-next-line
    const dbRefTrap = ref(db, "users/" + uid + "/traps");

    onValue(dbRefTrap, (snap) => {
      snap.forEach((child) => {
        setSnapChildren((snapChildren) => [...snapChildren, child]);
      });
    });
    return () => {};
  }, [db, uid]);

  function setTrap(key, index) {
    props.setTrapState(key);
    const item = document.getElementById("trap" + index);
    snapChildren.map((child, index) => {
      return document
        .getElementById("trap" + index)
        .classList.remove("trap-active");
    });
    item.classList.add("trap-active");
  }

  return (
    <>
      <nav className="dashboard-nav" id="dashboard-nav">
        <h1 onClick={() => navigate("/")}>Smart Traps</h1>
        <div style={{ float: "right" }}>
          <i
            onClick={handleClick}
            className={!burgerClicked ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>
      </nav>
      <aside className={burgerClicked ? "active" : ""}>
        <div className="user-info">
          <div className="user-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <p>{currentUser.email}</p>
        </div>
        <div className="trap-list">
          <ul>
            {snapChildren.map((child, index) => {
              let childValue = child.val();
              return (
                <li
                  key={index}
                  id={"trap" + index}
                  onClick={() => {
                    setTrap(child.key, index);
                  }}
                >
                  {childValue["name"]}
                </li>
              );
            })}
          </ul>
          <p className="add-trap" onClick={addTrap}>
            {t("dashboard.navbar.add-trap")}
          </p>
        </div>
        <div className="buttons">
          <button
            className="dashboard-button home"
            onClick={() => {
              navigate("/home");
            }}
          >
            {t("dashboard.navbar.button.home")}
          </button>
          <button
            className="dashboard-button logout"
            disabled={loading}
            onClick={handleSignOut}
          >
            {t("dashboard.navbar.button.logout")}
          </button>
        </div>
      </aside>
    </>
  );
}

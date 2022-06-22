import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

function AddTrap() {
  const nameRef = useRef();
  const idRef = useRef();

  const { currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const database = getDatabase();

  async function handleSubmit(e) {
    e.preventDefault();

    const uid = firebase.auth().currentUser.uid;

    try {
      setError("");
      setLoading(true);
      const reference = ref(
        database,
        "users/" + uid + "/traps/" + idRef.current.value
      );

      const refer = ref(database, "users/" + uid + "/traps");
      let proceed = true;
      onValue(refer, (snapshot) => {
        snapshot.forEach((child) => {
          if (child.key === idRef.current.value) {
            setError("add-trap.error.exists");
            proceed = false;
          }
        });
      });

      if (proceed) {
        await set(reference, { name: nameRef.current.value });
        navigate("/dashboard");
      }
    } catch (error) {
      setError("add-trap.error.basic");
    }
    setLoading(false);
  }

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="title-slide">
        <div className="title login-box">
          <h1 className="login-title">{t("add-trap.title")}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              id="name"
              name="name"
              placeholder={t("add-trap.form.name")}
              className="login-input usrnm"
              ref={nameRef}
            ></input>
            <input
              type="id"
              id="id"
              name="id"
              placeholder={t("add-trap.form.id")}
              className="login-input pswd"
              ref={idRef}
            ></input>
            <span className="error">{t(error)}</span>
            <input
              type="submit"
              disabled={loading}
              className="login-submit"
              value={t("add-trap.submit")}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTrap;

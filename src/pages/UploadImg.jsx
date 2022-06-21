import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

function UploadImg() {
  const fileRef = useRef();

  const { currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      let today = new Date();

      const reference = ref(
        storage,
        "users/" +
          firebase.auth().currentUser.uid +
          "/traps/" +
          today.toDateString() +
          "/" +
          fileRef.current.files[0].name
      );

      uploadBytes(reference, fileRef.files[0]);
      navigate("/dashboard");
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    navigate("/dashboard");
  }

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="title-slide">
        <div className="title login-box">
          <h1 className="login-title">{t("add-image.title")}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              id="file"
              name="file"
              className="login-input file"
              accept="image/*"
              ref={fileRef}
            ></input>
            <span className="error">{t(error)}</span>
            <input
              type="submit"
              disabled={loading}
              className="login-submit"
              value={t("add-image.button")}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadImg;

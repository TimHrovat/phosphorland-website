import React, { useState, useRef } from "react";
import "./dashboard-content.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import firebase from "firebase/compat/app";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function DashboardContent(props) {
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(true);
  const [displayUpload, setDisplayUpload] = useState(false);
  const [allImages, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [t, i18n] = useTranslation("common");
  const navigate = useNavigate();
  const fileRef = useRef();
  const storage = getStorage();

  function loadImages() {
    setImages([]);

    const path =
      "users/" +
      firebase.auth().currentUser.uid +
      "/traps/" +
      props.trapID +
      "/" +
      date.toDateString();

    let storageRef = ref(getStorage(), path);

    listAll(storageRef)
      .then(function (res) {
        res.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function uploadImage(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      const reference = ref(
        storage,
        "users/" +
          firebase.auth().currentUser.uid +
          "/traps/" +
          props.trapID +
          "/" +
          date.toDateString() +
          "/" +
          fileRef.current.files[0].name
      );

      await uploadBytes(reference, fileRef.current.files[0]);
      setDisplayUpload(false);
      setDisplayDate(false);
      loadImages();
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <>
      <main>
        <section
          className="calendar-section"
          style={displayDate ? { display: "block" } : { display: "none" }}
        >
          <h1>{t("dashboard.content.calendar.title")}</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div>
            {t("dashboard.content.calendar.tooltip") +
              " " +
              date.toDateString()}
          </div>
          <div className="error">{t(error)}</div>
          <button
            className="navigation-btn"
            onClick={() => {
              setError("");
              if (props.trapID === undefined) {
                setError("dashboard.content.calendar.error.select-trap");
                return;
              }
              setDisplayDate(false);
              loadImages();
            }}
          >
            {t("dashboard.content.calendar.button")}
          </button>
        </section>
        <section
          className="images-section"
          style={!displayDate ? { display: "block" } : { display: "none" }}
        >
          <div>
            {allImages.map((image) => {
              return (
                <div key={image} className="image">
                  <img src={image} alt="database img" />
                </div>
              );
            })}
          </div>
          <button
            className="navigation-btn back"
            onClick={() => {
              setDisplayDate(true);
              setDisplayUpload(false);
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="navigation-btn add-image"
            onClick={() => {
              setDisplayUpload(true);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </section>
        <section
          className="upload-section"
          style={displayUpload ? { display: "block" } : { display: "none" }}
        >
          <i
            className="fa-solid fa-times close-upload"
            onClick={() => {
              setDisplayUpload(false);
            }}
          />
          <form onSubmit={uploadImage}>
            <input
              type="file"
              name="file"
              className="login-input file-input file"
              id="file-input"
              accept="image/*"
              ref={fileRef}
            ></input>
            <span className="error">{t(error)}</span>
            <input
              type="submit"
              disabled={loading}
              className="login-submit file-input"
              id="file-submit"
              value={t("add-image.button")}
            ></input>
          </form>
        </section>
      </main>
    </>
  );
}

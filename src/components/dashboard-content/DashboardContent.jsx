import React, { useState } from "react";
import "./dashboard-content.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";
import { useTranslation } from "react-i18next";

export default function DashboardContent(props) {
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(true);
  const [allImages, setImages] = useState([]);
  const [t, i18n] = useTranslation("common");

  function loadImages() {
    if (!displayDate) return;

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
          <button
            className="navigation-btn"
            onClick={() => {
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
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </section>
      </main>
    </>
  );
}

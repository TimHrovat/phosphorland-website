import React, { useState } from "react";
import "./dashboard-content.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";

export default function DashboardContent(props) {
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(true);
  const [allImages, setImages] = useState([]);

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
          style={displayDate ? { display: "block" } : { display: "none" }}
        >
          <h1>Select the date to see the images:</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div>Selected date: {date.toDateString()}</div>
          <button
            onClick={() => {
              setDisplayDate(false);
              loadImages();
            }}
          >
            change
          </button>
        </section>
        <section
          style={!displayDate ? { display: "block" } : { display: "none" }}
        >
          {allImages.map((image) => {
            return (
              <div key={image} className="image">
                <img src={image} alt="" style={{ width: 300, height: 300 }} />
              </div>
            );
          })}
          <button
            onClick={() => {
              setDisplayDate(true);
            }}
          >
            change
          </button>
        </section>
      </main>
    </>
  );
}

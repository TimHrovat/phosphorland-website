import React from "react";
import titleImage from "../assets/home-page-images/homepage.png";
import FadeInOut from "../components/animations/FadeInOut";

function Home() {
  return (
    <>
      <div className="title-slide">
        <div className="title">
          <FadeInOut show={true} duration={800}>
            <h1>Automatic pest monitoring</h1>
            <h2>Our traps can monitor all types of insects on your farm.</h2>
          </FadeInOut>
        </div>
      </div>
      <div className="content"></div>
    </>
  );
}

export default Home;

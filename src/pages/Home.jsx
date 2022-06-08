import React from "react";
import FadeInOut from "../components/animations/FadeInOut";
import "./styles/cards.css";
import "./styles/small_cards.css";
import { Link } from "react-router-dom";
import { SmallCardsList } from "./SmallCardsList";

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
      <div className="content">
        <div className="HomeCard">
          <h1 className="card-title">Traps</h1>
          <p className="description">
            Insects, disease and weather challenges can cost a lot of work and
            revenue. With Phosphorland traps, you can protect your crops and
            investments.
          </p>
          <p className="description">
            Our Smart Traps are an automated system for monitoring insects,
            attracted to them. It works in all areas covered by GPRS, 3G or LTE
            network. The system consists of fully integrated, automated and
            easy-to-use tools.
          </p>
          <div className="sections">
            <div>
              <h2 className="section-title">Benefits for profucers</h2>
              <ul>
                <li className="check-mark-list">
                  Greater monitoring accuracy at a lower cost
                </li>
                <li className="check-mark-list">
                  Fewer field visits and more efficient pest control
                </li>
                <li className="check-mark-list">
                  Optimization in the application of pesticides
                </li>
                <li className="check-mark-list">
                  Near real-time insight into a pest attack
                </li>
                <li className="check-mark-list">
                  Data sharing made easy with Eng. Agronomist
                </li>
              </ul>
            </div>
            <div>
              <p className="description">
                The system provides near real-time indications of pest
                occurrences. Improved monitoring accuracy will significantly
                increase the quality and feasibility of your decision making.
              </p>
              <Link to="/contact">
                <button className="contact-us-button">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="HomeCard">
          <ul className="small-cards-list">
            {SmallCardsList.map((card, index) => {
              return (
                <li key={index} className="small-card">
                  <img
                    className="small-card-icon"
                    src={card.icon}
                    alt={card.title}
                  />
                  <h3 className="small-card-title">{card.title}</h3>
                  <p className="small-card-description">{card.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

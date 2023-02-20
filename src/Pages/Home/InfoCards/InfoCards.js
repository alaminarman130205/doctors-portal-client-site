import React from "react";
import hour from "../../../assets/images/hour.png";
import "./info.css";

const InfoCards = () => {
  return (
    <div className="mt-14">
      <div className="lg:flex ml-5 first">
        <img className="lg:mr-10 second" src={hour} alt="nothing" />
        <img className="lg:mr-10 third" src={hour} alt="nothing" />
        <img src={hour} alt="nothing forth" />
      </div>
    </div>
  );
};

export default InfoCards;

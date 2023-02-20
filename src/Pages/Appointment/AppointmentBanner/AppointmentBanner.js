import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl ml-10"
          alt="chair"
        />
        <div className="mr-20">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

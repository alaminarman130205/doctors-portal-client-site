import React from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center text-primary text-bold">
        available appointment on {format(selectedDate, "PPP")}
      </h1>
    </div>
  );
};

export default AvailableAppointment;

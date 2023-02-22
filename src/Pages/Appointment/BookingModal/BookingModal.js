import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name1 = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      AppointmentDate: date,
      treatment: name,
      patient: name1,
      slot,
      email,
      phone,
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
              value={date}
              disabled
            />

            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-md w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="input input-bordered input-md w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="your phone number"
              className="input input-bordered input-md w-full"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

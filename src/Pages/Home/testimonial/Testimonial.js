import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Kader from "./Kader";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "winson Herry",
      location: "cerlifonia",
      img: people1,
      areas:
        "he lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so",
    },
    {
      _id: 2,
      name: "winson Herry",
      location: "cerlifonia",
      img: people2,
      areas:
        "he lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so",
    },
    {
      _id: 3,
      name: "winson Herry",
      location: "cerlifonia",
      img: people3,
      areas:
        "he lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so",
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl"> What our patients says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Kader key={review._id} review={review}></Kader>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

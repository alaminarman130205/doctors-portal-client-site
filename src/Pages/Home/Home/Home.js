import React from "react";
import Banner from "../Bannar/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

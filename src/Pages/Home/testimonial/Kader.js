import React from "react";

const Kader = ({ review }) => {
  const { name, img, areas } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{areas}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Kader;

import React from "react";

const InfoGlasses = ({ imgGlasses }) => {
  console.log({ imgGlasses });
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "70px",
        backgroundColor: "white",
        width: "480px",
      }}
    >
      <h2 style={{ color: "blue" }}>{imgGlasses?.name}</h2>
      <p style={{ color: "while", fontSize: 30}}>{imgGlasses?.price}$</p>
      <p style={{ color: "while" }}>{imgGlasses?.desc}</p>
     
    </div>
  );
};

export default InfoGlasses;

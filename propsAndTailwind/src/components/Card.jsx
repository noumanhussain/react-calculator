import React from "react";

function Card({ userName, detail }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        Tailwind with {userName}
      </div>
      <h1>{detail.age}</h1>
    </>
  );
}

export default Card;

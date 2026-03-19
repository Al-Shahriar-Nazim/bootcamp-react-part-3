import React from "react";

const Cousin = ({ name, assets }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <small>{assets}</small>
      </p>
    </div>
  );
};

export default Cousin;

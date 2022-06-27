import React from "react";
import PropTypes from "prop-types";

const Card = ({ color, children }) => {
  return (
    <div className="card" style={{ background: color }}>
      <div className="card-title">Step 1</div>
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Card;

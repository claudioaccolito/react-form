import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, color, children, disabled }) => {
  return (
    <article
      data-testid="card"
      className={`card ${disabled ? "disabled" : ""}`}
      style={{ background: color }}
    >
      <div className="card-title">{title}</div>
      <div>{children}</div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

Card.defaultProps = {
  disabled: false,
};

export default Card;

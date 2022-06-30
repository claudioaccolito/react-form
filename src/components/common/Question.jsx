import React from "react";
import PropTypes from "prop-types";

const Question = ({ text }) => {
  return (
    <div data-testid="question" className="card-question">
      <i>{text}</i>
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;

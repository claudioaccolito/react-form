import React from "react";
import PropTypes from "prop-types";

const YesAndNo = ({ isYes, onChangeRadio }) => (
  <div data-testid="radio-btns">
    <input
      type="radio"
      value="yes"
      checked={isYes === true}
      onChange={onChangeRadio}
    />
    <label>Yes</label>
    <input
      type="radio"
      value="no"
      checked={isYes === false}
      onChange={onChangeRadio}
    />
    <label>No</label>
  </div>
);

YesAndNo.propTypes = {
  isYes: PropTypes.bool,
  onChangeRadio: PropTypes.func.isRequired,
};

YesAndNo.defaultProps = {
  isYes: null,
};

export default YesAndNo;

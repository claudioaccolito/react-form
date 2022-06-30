import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Card, Question, SuccessIcon, YesAndNo } from "../common";

const Step2 = ({ setData, disabled }) => {
  const [answer1, setAnswer1] = useState({ isYes: null, value: null });
  const [answer2, setAnswer2] = useState({ isYes: null });
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // check all
    if (answer1.isYes !== null && answer2.isYes !== null) {
      setOk(true);
      setData([answer1, answer2]);
    }
  }, [answer1, answer2]);

  return (
    <Card title="Step 2" color="#B3DFED" disabled={disabled}>
      <div data-testid="step2">
        <div className="card-block">
          <Question text="Would you like your company name on your badges?" />
          <YesAndNo
            isYes={answer1.isYes}
            onChangeRadio={(e) => {
              const isYes = e.target.value === "yes";
              setAnswer1({ isYes, value: isYes ? "" : null });
            }}
          />
          {answer1?.isYes && (
            <div>
              <label className="label">
                <i>Company Name: </i>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setAnswer1({ isYes: true, value: e.target.value });
                }}
              />
            </div>
          )}
        </div>
        <div className="card-block">
          <Question text="Will anyone in your group require special accomodation?" />
          <YesAndNo
            isYes={answer2.isYes}
            onChangeRadio={(e) => {
              const isYes = e.target.value === "yes";
              setAnswer2({ isYes });
            }}
          />
        </div>
        {ok && <SuccessIcon />}
      </div>
    </Card>
  );
};

Step2.propTypes = {
  setData: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Step2.defaultProps = {
  disabled: true,
};

export default Step2;

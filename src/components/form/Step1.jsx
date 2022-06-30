import React, { useState } from "react";
import PropTypes from "prop-types";

import { Card, Question, SuccessIcon } from "../common";

const Step1 = ({ setData, disabled }) => {
  const getArrayOf = (n) => [...Array(n).keys()];
  const [names, setNames] = useState([]);
  const [ok, setOk] = useState(false);

  const onChangeSelect = (e) => {
    const totNames = [];
    for (let i = 0; i < e.target.value; i++) {
      totNames.push({
        id: `input-${i + 1}`,
        name: names[i] ? names[i].name : "",
      });
    }
    setNames(totNames);
  };

  const checkAllInputs = () => {
    if (names.length > 0 && names.every((e) => e.name && e.name !== "")) {
      setOk(true);
      setData(names);
    } else {
      setOk(false);
      setData(null);
    }
  };

  const onChangeName = (id, event) => {
    const input = names.find((e) => e.id == id);
    if (input) {
      Object.assign(input, { name: event.target.value });
      setNames([...names]);
    }

    checkAllInputs();
  };

  return (
    <Card title="Step 1" color="#B2EDCB" disabled={disabled}>
      <div>
        <div className="card-block">
          <Question text="How many people will be attending?" />
          <select
            onChange={onChangeSelect}
            id="step-1-select"
            defaultValue="default"
          >
            <option value="default" disabled>
              Please Choose
            </option>
            {getArrayOf(5).map((n) => (
              <option key={`option-${n + 1}`} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
          {names.length > 0 && (
            <div className="step-1-form">
              <h4>Please provide full names:</h4>
              {names.map((e, i) => (
                <div key={`input-${e.id}`}>
                  <label className="label">{`Attendee ${i + 1} Name: `}</label>
                  <input
                    onChange={(event) => onChangeName(e.id, event)}
                    type="text"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {ok && <SuccessIcon />}
      </div>
    </Card>
  );
};

Step1.propTypes = {
  setData: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Step1.defaultProps = {
  disabled: false,
};

export default Step1;

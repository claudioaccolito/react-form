import React, { useState } from "react";
import PropTypes from "prop-types";

import { Card, Question } from "../common";

const Step3 = ({ sendAllData, disabled }) => {
  const [ready, setReady] = useState(false);

  return (
    <Card title="Step 3" color="#EECCB4" disabled={disabled}>
      <div data-testid="step3" className="card-block">
        <Question text="Are you ready to rock?" />
        <input
          onChange={() => setReady(!ready)}
          type="checkbox"
          value={ready}
        />
        <button disabled={!ready} type="button" onClick={sendAllData}>
          Complete Registration
        </button>
      </div>
    </Card>
  );
};

Step3.propTypes = {
  sendAllData: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Step3.defaultProps = {
  disabled: true,
};

export default Step3;

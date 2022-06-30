import React from "react";
import PropTypes from "prop-types";

import { Card, Question } from "../common";

const Step3 = ({ data, setData }) => {
  return (
    <Card color="#EECCB4">
      <div>
        <Question text="Are you ready to rock?" />
      </div>
    </Card>
  );
};

Step3.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Step3;

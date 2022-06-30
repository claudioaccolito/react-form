import React from "react";
import PropTypes from "prop-types";

import { Card, Question } from "../common";

const Step2 = ({ data, setData }) => {
  const [answers, setAnswers] = useState([
    { isYes: null, value: null },
    { isYes: null },
  ]);
  const [ok, setOk] = useState(false);

  const yesAndNo = () => (
    <div>
      <input type="radio" id="yes" name="fav_language" value="yes" />
      <label>Yes</label>
      <input type="radio" id="no" name="fav_language" value="no" />
      <label>No</label>
    </div>
  );

  return (
    <Card color="#B3DFED">
      <div>
        <Question text="Would you like your company name on your badges?" />
        {yesAndNo(0)}
        {answers[0].isYes && (
          <input
            // onChange={(event) => setAnswers([...answers,])}
            type="text"
          />
        )}
      </div>
      <div>
        <Question text="Will anyone in your group require special accomodation?" />
        {yesAndNo(1)}
      </div>
    </Card>
  );
};

Step2.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Step2;

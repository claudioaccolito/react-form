import React from "react";
import Card from "../components/Card";
import Question from "../components/Question";

const Step1 = () => {
  const total = [...Array(5).keys()];
  return (
    <Card color="#B2EDCB">
      <div>
        <Question text="How many people will be attending?" />
        <select id="step-1-select" defaultValue="default">
          <option value="default" disabled>
            Please Choose
          </option>
          {total.map((n) => (
            <option key={`option-${n}`} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
};

export default Step1;

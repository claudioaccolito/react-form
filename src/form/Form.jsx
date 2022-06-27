import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  return (
    <section className="flex-container">
      <Step1 />
      <Step2 />
      <Step3 />
    </section>
  );
};

export default Form;

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = () => {
  const [data, setData] = useState({
    step1: null,
    step2: null,
    step3: null,
  });

  return (
    <section className="flex-container">
      <Step1 setData={setData} data={data} />
      <Step2 setData={setData} data={data} />
      <Step3 setData={setData} data={data} />
    </section>
  );
};

export default Form;

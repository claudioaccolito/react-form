import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [count, setCount] = useState(1);

  const sendAllData = () => {
    console.log("sending", [{ step1: data1 }, { step2: data2 }]);
    setData1(null);
    setData2(null);
    setCount(count + 1); // force remount of steps with unique keys
  };

  return (
    count && (
      <section>
        <form className="flex-container">
          <Step1 key={`step1-${count}`} setData={setData1} disabled={false} />
          <Step2
            key={`step2-${count}`}
            setData={setData2}
            disabled={data1 === null}
          />
          <Step3
            key={`stap3-${count}`}
            sendAllData={sendAllData}
            disabled={data2 === null}
          />
        </form>
      </section>
    )
  );
};

export default Form;

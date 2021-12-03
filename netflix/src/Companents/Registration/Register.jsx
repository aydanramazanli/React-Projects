import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const plans = [
  {
    id: 0,
    plans: "Basic",
  },
  { id: 1, plans: "Standart" },
  { id: 2, plans: "Premium" },
];

export default function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [step2Check, setStep2Check] = useState(null)

  //function next step
  const Step = () => {
    setStep(step + 1);
  };


  // 4 companent step
  const Steps = () => {
    if (step === 1) {
      return (
        <Step1
          onClick={() => {
            Step();
          }}
        />
      );
    } else if (step === 2) {
      return (
        <Step2
          onClick={() => {
            Step();
          }} plans={plans}
        />
      );
    } else if (step === 3) {
      return (
        <Step3
          onClick={() => {
            Step();
          }}
        />
      );
    } else if (step === 4) {
      return <Step4 firstname={name} />;
    }
  };

  // step 2 chek for plan
const checkPlans=()=>{
  if(step2Check===null){
    alert('Please choose any plans')
  }
  else{
    setStep(step+1)
  }
}


  return <div>{Steps()}</div>;
}

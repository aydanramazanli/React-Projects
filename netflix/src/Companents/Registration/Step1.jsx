import React from "react";
import okeyPhoto from "..//..//Images/download.png";

function Step1({onClick}) {
  return (
    <div>
  
      <hr />
      <div style={{height: '87vh'}} className="flex justify-center items-center flex-col text-white font-medium">
        <img src={okeyPhoto} alt="" />
        <h4>STEP 1 OF 3</h4>
        <h2 className="my-2">Choose Your Plan.</h2> 
        <p>
          Choose from any of our three plans, and you won't be charged until
          after your free month ends.
        </p>
        <button onClick={onClick} className="px-6 py-2 my-3 bg-red-600 font-bold rounded ">See The Plans</button>
      </div>
      <hr  />

    </div>
  );
}

export default Step1;
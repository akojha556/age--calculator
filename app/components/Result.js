import React from "react";
import Output from "./Output";

const Result = () => {
     return (
          <div className="result-section mt-10 xl:mt-4">
               <Output lableName="Years" result="--" />
               <Output lableName="Months" result="--" />
               <Output lableName="Days" result="--" />
          </div>
     );
}

export default Result;
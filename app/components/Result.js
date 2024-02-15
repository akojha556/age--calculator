import React from "react";
import Output from "./Output";

const Result = ({ ageData }) => {
     return (
          <div className="result-section mt-10 xl:mt-4">
               <Output lableName="Years" result={ageData.ageYear} />
               <Output lableName="Months" result={ageData.ageMonth} />
               <Output lableName="Days" result={ageData.ageDate} />
          </div>
     );
}

export default Result;
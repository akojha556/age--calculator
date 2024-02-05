import React from "react";

const Output = (props) => {
     return (
          <div className="flex">
               <div className="num mr-2">{props.result}</div>
               <p>{props.lableName}</p>
          </div>
     );
}

export default Output;
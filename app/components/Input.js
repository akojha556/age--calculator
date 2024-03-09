import React from "react";

const Input = (props) => {
     return (
          <div className="position: relative">
               <h1 className={props.inputEmptyCheck && props.checkValidData && props.validDate ? "color: hsl(0, 1%, 44%)" : "text-red-400"}>{props.header}</h1>
               <input className={props.inputEmptyCheck && props.checkValidData && props.validDate ? "border: 1px solid hsl(0, 0%, 86%)" : "border-red-400"} onChange={props.handleChange} value={props.inputValue} type="text" name={props.name} placeholder={props.placeholder} autoComplete="off" />
               <p className={props.checkValidData ? "hidden" : "error-msg position: absolute"}>{props.validPara}</p>
               <p className={props.inputEmptyCheck ? "hidden" : "error-msg position: absolute"}>{props.requiredPara}</p>
               <p className={props.validDate ? "hidden" : "error-msg position: absolute"}>{props.validDatePara}</p>
          </div>
     );
}

export default Input;
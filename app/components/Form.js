import React, { useState } from "react";

const Form = () => {
     const [inputValue, setInputValue] = useState({
          day: "",
          month: "",
          year: ""
     });

     const currentDate = new Date();
     const currentYear = (currentDate).getFullYear();

     const [inputEmptyCheck, setInputEmptyCheck] = useState({
          day: true,
          month: true,
          year: true
     });

     const [checkValidData, setCheckValidData] = useState({
          day: true,
          month: true,
          year: true
     });

     //To change the state of input
     const handleChange = (evt) => {
          const { name, value } = evt.target;

          setInputValue((prevValue) => {
               return {
                    ...prevValue,
                    [name]: value
               };
          });
     }

     //Check each input empty or not after form submit
     const checkIfEmpty = () => {
          updateInputEmptyCheck("day");
          updateInputEmptyCheck("month");
          updateInputEmptyCheck("year");
     }

     const updateInputEmptyCheck = (fieldName) => {
          setInputEmptyCheck((prevValue) => ({
               ...prevValue,
               [fieldName]: inputValue[fieldName].length > 0
          }));
     }

     //Check if date, month and year are correct or not
     const ifValidData = () => {
          setCheckValidData((prevValue) => ({
               ...prevValue,
               day: Number(inputValue.day) <= 31,
               month: Number(inputValue.month) <= 12,
               year: Number(inputValue.year) <= currentYear
          }));
     }

     return (
          <div>
               <form onSubmit={(evt) => {
                    checkIfEmpty();
                    ifValidData();
                    evt.preventDefault();
               }} className="input-section pb-10 flex">
                    <div className="position: relative">
                         <h1 className={inputEmptyCheck.day && checkValidData.day? "color: hsl(0, 1%, 44%)" : "text-red-400"}>DAY</h1>
                         <input className={inputEmptyCheck.day && checkValidData.day? "border: 1px solid hsl(0, 0%, 86%)" : "border-red-400"} onChange={handleChange} value={inputValue.day} type="text" name="day" placeholder="DD" autoComplete="off" />
                         <p className={checkValidData.day? "hidden" : "error-msg position: absolute"}>Must be a valid day</p>
                         <p className={inputEmptyCheck.day? "hidden" : "error-msg position: absolute"}>This field is required</p>
                    </div>
                    <div className="position: relative">
                         <h1 className={inputEmptyCheck.month && checkValidData.month? "color: hsl(0, 1%, 44%)" : "text-red-400"}>MONTH</h1>
                         <input className={inputEmptyCheck.month && checkValidData.month? "border: 1px solid hsl(0, 0%, 86%)" : "border-red-400"} onChange={handleChange} value={inputValue.month} type="text" name="month" placeholder="MM" autoComplete="off" />
                         <p className={checkValidData.month? "hidden" : "error-msg position: absolute"}>Must be a valid month</p>
                         <p className={inputEmptyCheck.month? "hidden" : "error-msg position: absolute"}>This field is required</p>
                    </div>
                    <div className="position: relative">
                         <h1 className={inputEmptyCheck.year && checkValidData.year? "color: hsl(0, 1%, 44%)" : "text-red-400"}>YEAR</h1>
                         <input className={inputEmptyCheck.year && checkValidData.year? "border: 1px solid hsl(0, 0%, 86%)" : "border-red-400"} onChange={handleChange} value={inputValue.year} type="text" name="year" placeholder="YYYY" autoComplete="off" />
                         <p className={checkValidData.year? "hidden" : "error-msg position: absolute"}>Must be in past</p>
                         <p className={inputEmptyCheck.year? "hidden" : "error-msg position: absolute"}>This field is required</p>
                    </div>
                    <button type="submit" className="get-btn"><img src="/assets/images/icon-arrow.svg" alt="icon" /></button>
               </form>
          </div>
     );
}

export default Form;
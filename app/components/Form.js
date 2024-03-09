import moment from "moment";
import React, { useState } from "react";
import Input from "./Input";

const Form = ({ sendData }) => {
     const [inputValue, setInputValue] = useState({ day: "", month: "", year: "" });
     const [inputEmptyCheck, setInputEmptyCheck] = useState({ day: true, month: true, year: true });
     const [checkValidData, setCheckValidData] = useState({ day: true, month: true, year: true });
     const [validDate, setValidDate] = useState(true);
     const currentDate = new Date();
     let currentYear = (currentDate).getFullYear();
     let currentMonth = currentDate.getMonth() + 1;
     let currentDays = currentDate.getDate();
     const placeholder = {day: "DD", month: "MM", year: "YYYY"};

     //This function is to change the state of input
     const handleChange = (evt) => {
          const { name, value } = evt.target;
          setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
     }

     //This function checks each input empty or not after form submit
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

     //This function checks if date, month and year are correct or not
     const ifValidData = () => {
          setCheckValidData((prevValue) => ({
               ...prevValue,
               day: Number(inputValue.day) <= 31,
               month: Number(inputValue.month) <= 12,
               year: Number(inputValue.year) <= currentYear
          }));
     }

     //This function checks the date is valid or not using moment js and provide the result
     const isValidDate = () => {
          const { day: birthDate, month: birthMonth, year: birthYear } = inputValue;
          const dateStr = `${birthDate}/${birthMonth}/${birthYear}`;

          //This sets valid date
          if (birthDate > 0 && birthDate <= 31 && birthMonth > 0 && birthMonth <= 12 && birthYear > 0 && birthYear <= currentYear) {
               const isValidDate = moment(dateStr, "DD/MM/YYYY", true).isValid();
               setValidDate(isValidDate);

               //This gives proper age if date is valid
               if (isValidDate) {
                    let ageYear = currentYear - birthYear + (currentMonth >= birthMonth ? 0 : -1);
                    let ageMonth = currentMonth - birthMonth + (currentMonth >= birthMonth ? 0 : 12) + (currentDays >= birthDate ? 0 : -1);
                    let ageDays = currentDays - birthDate + (currentDays >= birthDate ? 0 : new Date(currentYear, currentMonth - 1, 0).getDate());

                    //This result goes to Card.js parent component
                    sendData({
                         ageDate: ageDays,
                         ageMonth: ageMonth,
                         ageYear: ageYear
                    });
               }
          } else {
               setValidDate(true);
          }
     }

     //Handle submit form function
     const handleSubmit = (evt) => {
          checkIfEmpty();
          ifValidData();
          isValidDate();

          evt.preventDefault();
     }

     return (
          <div>
               <form onSubmit={handleSubmit} className="input-section pb-10 flex">
                    {["day", "month", "year"].map((fieldName, i) => (
                         <Input
                              key={i}
                              inputEmptyCheck={inputEmptyCheck[fieldName]}
                              checkValidData={checkValidData[fieldName]}
                              validDate={validDate}
                              handleChange={handleChange}
                              inputValue={inputValue[fieldName]}
                              header={fieldName.toUpperCase()}
                              name={fieldName}
                              placeholder={placeholder[fieldName]}
                              validPara={`Must be a valid ${fieldName}`}
                              requiredPara="This field is required"
                              validDatePara={fieldName === "day" ? "Must be a valid date" : undefined}
                         />
                    ))}

                    <button type="submit" className="get-btn"><img src="/assets/images/icon-arrow.svg" alt="icon" /></button>
               </form>
          </div>
     );
}

export default Form;
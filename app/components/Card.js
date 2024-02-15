"use client"
import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";

const Card = () => {

     const [ageData, setAgeData] = useState({
          ageDate: "--",
          ageMonth: "--",
          ageYear: "--"
     });

     const receiveData = (variable) => {
          setAgeData(variable);
     }
     
     return (
          <div className="card px-16 py-4 rounded-xl rounded-br-[12rem] min-h-[60vh] xl:min-h-[80vh]">
               <Form sendData={receiveData} />
               <Result ageData={ageData} />
          </div>
     );
}

export default Card;
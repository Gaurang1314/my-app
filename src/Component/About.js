import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnValue, setBtnValue] = useState("enable lightmode");

  let toggleMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnValue("enable darkmode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnValue("enable lightmode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What We Provide
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextEasy</strong> is provides online text editing platform for Free Which can be used for formatting the 
              data and Saving it into the files 
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Contact Us 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>www.texteasy.in</strong> <br></br>
              <strong>Address:</strong>Lohia Jain,Bavdhan,Pune<br></br>
            </div>
          </div>
        </div>
        <div className="accordion-item">
         
          
        </div>
      </div>
      
        <button type="button" onClick={toggleMode} className="btn btn-primary">
          {btnValue}
        </button>
      </div>
        );
}

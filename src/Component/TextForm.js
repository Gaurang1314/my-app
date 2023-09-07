import React, { useState } from "react";
import { saveAs } from 'file-saver';


export default function TextForm(props) {

  const handleSaveClick = () => {
    if (text.length < 1) {
      alert('Please insert text first');
    } else {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'textFile.txt');
    }
  };
  
  const handleUpClick = () => {
    if (text.length < 1) {
      alert("please insert text first");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
    }
  };
  const handleLoClick = () => {
    if (text.length < 1) {
      alert("please insert text first");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
    }
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = ()=>{
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="MyBox"
            rows="10"
            style={props.textBoxStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert To Lowecase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSaveClick}>
          Save Text
        </button>

        <button className="btn btn btn-danger mx-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>
          Total words:{text.split(" ").length} and total characters:
          {text.length}
        </p>
        <p>Total time require to read: {0.009 * text.split(" ").length} mins</p>
        <h2>Preview :</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

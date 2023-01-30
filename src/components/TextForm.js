import React, { useState } from "react";

export default function TextForm(props) {
  //text = "new text";//Wrong Way to change the state
  // setText("New Text");//Correct Way to change the state
  const handleUpClick = () => {
    console.log("UpperCase was clicked " + text);
    // setText("You have Clicked on handleUpclick ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "danger");
  };
  const handleLowClick = () => {
    console.log("LowerCase was clicked " + text);
    // setText("You have Clicked on handleUpclick ");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    console.log("LowerCase was clicked " + text);
    // setText("You have Clicked on handleUpclick ");

    setText(" ");
  };
  

  const handleReplaceClick = () => {
    let newText = text.replaceAll(ftext, rtext);
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () =>
  {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnfChange = (event) => {
    setfText(event.target.value);
  };

  const handleOnrChange = (event) => {
    setrText(event.target.value);
  };

  const handleExtraSpaces =() =>
  {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));

  };

  const [text, setText] = useState("Enter text here"); //array destructuring syntax
  const [ftext, setfText] = useState(""); //array destructuring syntax
  const [rtext, setrText] = useState(""); //array destructuring syntax

  return (
    <>
      <div className="container"  style = {{color: props.mode === 'dark' ?  '#848484':'light'}}>
        <h1>{props.heading} </h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            style = {{backgroundColor: props.mode === 'dark' ? '#848484': 'white'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container" >
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert To Upper Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert To Lower Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 " onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2 " onClick={ handleExtraSpaces}>
            Handle Extra Spaces
          </button>
        </div>
        <div className="container my-4">
          <button
            className="btn btn-primary mx-2 mb-4"
            onClick={handleReplaceClick}
          >
            Replace Word
          </button>

          <textarea
           className=" mx-2 mt-4"
            onChange={handleOnfChange}
            placeholder="Enter Word "
            rows="1"
          ></textarea>
          <textarea
            className=" mx-2 mt-4"
            onChange={handleOnrChange}
            placeholder="Replace"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'dark' ?  '#848484':'white'}}>
        <h2>Your Text Summary</h2>

        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to Preview here"}</p>
      </div>
    </>
  );
}

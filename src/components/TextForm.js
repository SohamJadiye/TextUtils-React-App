import React, { useState } from "react";

export default function TextForm(props) {
  //text = "new text";//Wrong Way to change the state
  // setText("New Text");//Correct Way to change the state
  const handleUpClick = () => {
    console.log("UpperCase was clicked " + text);
    // setText("You have Clicked on handleUpclick ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
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
    props.showAlert("Text Cleared !", "success");

    setText(" ");
  };
  

  const handleReplaceClick = () => {
    let newText = text.replaceAll(ftext, rtext);
    setText(newText);
    props.showAlert("Replaced !!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("You are typing...", "success");
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
    props.showAlert("Extra spaces handled !!", "success");

  };

  const [text, setText] = useState("Enter text here"); //array destructuring syntax
  const [ftext, setfText] = useState(""); //array destructuring syntax
  const [rtext, setrText] = useState(""); //array destructuring syntax

  return (
    <>
      <div className="container "  style = {{color: props.mode === 'dark' ?  'white':'black', margin:"30px"}}>
        <h1><strong>{props.heading}</strong> </h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <strong>Enter Your Text</strong>
          </label>
          <textarea
            style = {{backgroundColor: props.mode === 'dark' ? '#848484': 'white' ,border:"2px solid black"}}
            className="form-control"
            // value={text}
            placeholder={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container" >
          <button className="btn btn-primary mx-2 my-2"  style = {{border:"2px solid black"}}onClick={handleUpClick}>
            Convert To Upper Case
          </button>
          <button className="btn btn-primary mx-2  my-2"  style = {{border:"2px solid black"}} onClick={handleLowClick}>
            Convert To Lower Case
          </button>
          <button className="btn btn-primary mx-2 my-2"  style = {{border:"2px solid black"}} onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-2 "  style = {{border:"2px solid black"}} onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2 my-2 "  style = {{border:"2px solid black"}} onClick={ handleExtraSpaces}>
            Handle Extra Spaces
          </button>
        </div>
        <div className="container my-4">

          <textarea
           className=" mx-2 mt-4"
            onChange={handleOnfChange}
            placeholder="Enter Word "
            rows="1"
            style = {{border:"2px solid black",borderRadius: "6px"}}
          ></textarea>
          <textarea
            className=" mx-2 mt-4 "
            onChange={handleOnrChange}
            placeholder="Replace"
            rows="1"
            style = {{border:"2px solid black",borderRadius: "6px"}}
          ></textarea>

          <button
            className="btn btn-primary mx-2 mb-4 mt-2 "
            onClick={handleReplaceClick}
            style ={{display: "block" ,border:"2px solid black"}}
          >
            Replace Word
          </button>
        </div>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'dark' ?  'white':'black'}}>
        <h2><strong>Text Summary</strong></h2>

        <p style = {{display:"inline-block"}}>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
        <p style = {{display:"inline-block"}}>  {0.008 * text.split(" ").length} Minutes read</p>
        <h3><strong>Preview</strong></h3>
        <p>{text.length>0?text:"Enter Something to Preview here"}</p>
      </div>
    </>
  );
}

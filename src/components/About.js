import React,{useState} from "react";

export default function About(props) {

  // const[myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '4px solid black'
  // })

  
   let myStyle = 
   {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'black':'white'
   }
  


  // const[btntext,setbtntext] =useState("Enable Dark Mode");

  // let toggleStyle = () => {
  //   if( myStyle.color === 'white')
  //   {
  //       setMyStyle({
  //           color:'black',
  //           backgroundColor:'white',
  //           border: '4px solid black'
  //       })
  //       setbtntext("Enable Light Mode");
  //   }
  //   else
  //   {
  //       setMyStyle({
  //           color:'white',
  //           backgroundColor:'black',
  //           border: '4px solid cyan'
  //       })
  //       setbtntext("Enable Dark Mode");
  //   }
    
   
  // }



  return (
    <div className="container " >
      <h1 className ="my-3 " style = {{color: props.mode === 'dark' ?  'white':'black'}}>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
             style = {myStyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style = {myStyle}>
              <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or replace a word.   </strong> 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              style = {myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style = {myStyle}>
              <strong>Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</strong>
          
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style = {myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style = {myStyle}>
              <strong>This word counter software works in any web browses such as Chrome, Firefox, Internet Explorer, Safari,Opera. It suits to count characters in facebook,blog,books excel document,pdf document,essays etc</strong> 
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">

      {/* <button onClick={toggleStyle} className="btn btn-primary">{btntext}</button> */}
      </div>
    </div>
  );
}

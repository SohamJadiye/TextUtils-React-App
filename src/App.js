// import logo from './logo.svg';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const[mode,setMode] = useState('light');
  const [alert , setAlert ] = useState(null);

  const showAlert = (message , type) =>{

    setAlert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
      
    },1500);
  };

  const removeBodyClasses =() =>
  {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }


  const toggleMode = (cls) =>
  {
    removeBodyClasses();
    console.log(cls);
  
    if(cls === "dark")
    {
      setMode("dark");
      document.body.style.backgroundColor ='#045379';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing';
      // },2000);
      // setInterval(() =>{
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else if(cls === "light"){
      setMode("light");
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
    else
    {
      setMode("dark");
      showAlert(" "+cls+" mode has been enabled","success");
      
      document.body.classList.add('bg-'+cls);
      
    }
  }
  return (
    <>
   


<BrowserRouter>
  <Navbar  about ="About TextUtils" title = "TextUtils" mode = {mode} toggleMode ={toggleMode}/>
<Alert alert = {alert}/>
<Routes>
            <Route  exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the following details" mode = {mode} />}/>
            
            <Route  exact path="/about" element={<About mode = {mode} />}/>
            
</Routes>
</BrowserRouter>
{/* <TextForm showAlert = {showAlert} heading = "Enter the following details" mode = {mode} /> */}
{/* <About/> */}

      
    </>


  );
}

export default App;


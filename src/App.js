import './App.css';
import About from './Component/About';
import React,{useState} from 'react';


import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
function App() {

  const [mode,setMode]=useState('light');
  const [btnVal,setBtnVal]=useState("switch to Dark Mode")


  const [textBoxStyle,settextBoxStyle]=useState(
    {
      color:'black',
      backgroundColor:'white'
    }
  );

  const toggle=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      settextBoxStyle(
        {
          color:'black',
          backgroundColor:'white'
        }
      );
      setBtnVal("switch to dark Mode")
    }else{
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      settextBoxStyle(
        {
          color:'white',
          backgroundColor:'black'
        }
      );
      setBtnVal("switch to light Mode")

    }
  }

  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggle={toggle} btnVal={btnVal} />
   
   <div className="container my-3">
   <TextForm heading="Enter your text here to analyse" textBoxStyle={textBoxStyle}/>
   <About/>
   </div>
   </>
  );
}

export default App;

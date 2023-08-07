import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert = (message, type) => {
  setAlert({
    msg: message, type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
const toggleMode = () => {
  let textarea = document.getElementById('myBox');
  let about = document.getElementById('box');
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    textarea.style.backgroundColor = "black";
    textarea.style.color = "white";
    showAlert("Dark Mode has been enabled", "success")
  }
  else {
  setMode('light');
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  textarea.style.backgroundColor = "white";
  textarea.style.color = "black";
  showAlert("Light Mode has been enabled", "success")
}
};
  return (
    <>
    {/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"> 
      <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
          {/* <Routes>
            <Route exact path="/about" element={<About/>} >
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>
            </Route>
          </Routes> */}
      </div>
 {/* </Router> */}
    </>

  );
}

export default App;

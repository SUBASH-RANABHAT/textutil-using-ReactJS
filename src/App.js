import React from 'react';
import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
  <div>
      <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={ <TextForm heading="TextUtils - Word Counter, Char Counter, Convert Into Lowercase and Uppercase, Copy, Clear." mode={mode}/>}>
            </Route>
          </Routes>
    </div>
    </Router>
    </div>
    </>
  );
}

export default App;

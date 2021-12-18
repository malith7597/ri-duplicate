import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
// import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
     
     {/* <Login /> */}
        <SignUp />
      
    </div>
  );
}

export default App;
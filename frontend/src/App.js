import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './screens/LoginScreen/Login'
import SignUp from './screens/RegisterScreen/SignUp'
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    return (
    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
      </Routes>
  
    )
}

export default App

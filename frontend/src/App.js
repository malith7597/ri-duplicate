import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './screens/LoginScreen/Login'
import SignUp from './screens/RegisterScreen/SignUp'
import "bootstrap/dist/css/bootstrap.css";
import ForgotPassword from './screens/ForgotPassword/Forgotpassword';
import Reset from './screens/ResetPassword/ResetPassword';


const App = () => {
    return (
    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/fogot" element={<ForgotPassword/>} />
             <Route path="/reset" element={<Reset/>} />
      </Routes>
  
    )
}

export default App

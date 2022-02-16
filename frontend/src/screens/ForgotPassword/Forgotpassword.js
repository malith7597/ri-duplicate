import React ,{Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import {Image} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './forgotpassword.css'
const Message =()=>{

    return (
        <p className='p1'> That's okay!...
            <br/>
            Just enter the email address you've used to register with us 
            <br/>
            and we'll send you a reset link!.
        </p>
    )


}


const ForgotPassword = () => {
    

    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <div className='row mt-5'>
                        <h2 className='text-center mb-5 fw-bold fs-1'>Forgot Password</h2>
                    </div>
                    <Message/>
                    <div className='row'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-3'>
                            Submit
                        </Button>
                        <Form.Text className="text-muted">
                            <p> New User? <Link to="/register">Register Here</Link></p>
                        </Form.Text>
                    </Form>
                    </div>
                   
                </div>
                <div className='col-md-6'>
                    <Image src="./img/forgot-password.png" thumbnail style={{ border: "none" }} />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
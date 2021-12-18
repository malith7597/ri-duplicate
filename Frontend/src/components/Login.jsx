import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Image} from "react-bootstrap";

const Login = () => {
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <div className='row mt-5'>
                        <h2 className='text-center mb-5 fw-bold fs-1'>Login</h2>
                    </div>
                    <div className='row'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-3'>
                            Login
                        </Button>
                        <Form.Text className="text-muted">
                            <p>Are you new user? Sign Up here</p>
                        </Form.Text>
                    </Form>
                    </div>
                   
                </div>
                <div className='col-md-6'>
                    <Image src="./img/login.jpg" thumbnail style={{ border: "none" }} />
                </div>
            </div>
        </div>
    )
}

export default Login;
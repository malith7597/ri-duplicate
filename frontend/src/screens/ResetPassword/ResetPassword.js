import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {Image} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Reset = () => {

    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <div className='row mt-5'>
                        <h2 className='text-center mb-5 fw-bold fs-1'> Reset Password</h2>
                    </div>
                    <div className='row'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="email" placeholder="new password" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> Confirm New Password </Form.Label>
                            <Form.Control type="password" placeholder="re-type password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-3'>
                            Reset Password
                        </Button>
                        <div class="alert alert-primary" role="alert">
                        <p className='p1'> password reset success!</p> 
                    </div>
                    </Form>
                    </div>
                   
                </div>
                <div className='col-md-6'>
                    <Image src="./img/reset-password.jpg" thumbnail style={{ border: "none" }} />
                </div>
            </div>
        </div>
    )
}

export default Reset;
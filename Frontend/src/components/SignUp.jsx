import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Image } from "react-bootstrap";

const SignUp = () => {
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-6'>
                    <h2 className='text-center mb-5 fw-bold fs-1'>Sign Up</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridMemberName">
                            <Form.Label>Member Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>

                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridBirthDate">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control type="date" placeholder="Date of Birth" />
                        </Form.Group>

                            <Form.Group as={Col} controlId="formGridConfirmPassword">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control type="file" placeholder="Upload your Photo" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Avenue</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>...</option>
                                    <option>Club Service</option>
                                    <option>Professional Development</option>
                                    <option>Community Service</option>
                                    <option>International Service</option>
                                    <option>Sports and Recreational Activities</option>
                                    <option>Public Image</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Acedemic Year</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>...</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRACUOKID">
                                <Form.Label>RACUOK ID</Form.Label>
                                <Form.Control placeholder="RACUOK21_0001" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='col-md-6'>
                    <Image src="./img/signup.jpg" thumbnail style={{ border: "none" }} />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
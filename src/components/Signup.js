import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [file, setFile] = useState();

    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(file)
    }
   
  return (
    <div className="signup col-md-6 container py-5">
        <div className="signupHeader">
            <h2 className="mb-5 text-center">Signup To Your Account</h2>
        </div>
        <div className="contactform">
            <Form>
                <div className="d-sm-flex col">
                    <div className="col">
                        <Form.Group controlId="formBasicText" className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="Enter your name" />
                        </Form.Group>
                    </div>
                    
                    <div className="col mx-sm-1">
                        <Form.Group controlId="formBasicText" className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Enter your name" />
                        </Form.Group>
                    </div>
                </div>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Upload CV</Form.Label>
                    <div className="d-flex">
                        <Form.Control type="file" onChange={handleFile} />
                        <Button className="ms-2">Upload</Button>
                    </div>
                </Form.Group>

                <Button type="submit" className="mt-3">
                    <Link to="/SigninHome" className="link">Signup</Link>
                </Button>

                <p className="mt-3">If you have an account, please login</p>
                <Button>
                    <Link to="/Login" className="link">Login</Link>
                </Button>
            </Form>
        </div>
    </div>
  )
}

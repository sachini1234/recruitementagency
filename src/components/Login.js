import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login col-md-6 container py-5">
        <div className="loginHeader">
            <h2 className="mb-5 text-center">Login To Your Account</h2>
        </div>
        <div className="contactform">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex mt-3">
                    <p className="me-3">Forget password</p>
                    <Link to="/Resetpw" className="reset">Reset Password</Link>
                </div>

                <Button type="submit">
                    <Link to="/SigninHome" className="link">Login</Link>
                </Button>

                <p className="mt-3">If you don't have an account, please create an account</p>
                <Button>
                    <Link to="/Signup" className="link">Signup</Link>
                </Button>
            </Form>
        </div>
    </div>
  )
}

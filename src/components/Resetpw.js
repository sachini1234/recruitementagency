import React from 'react';
import { Form, Button } from "react-bootstrap";
import "./styles/style.css";

export const Resetpw = () => {
  return (
    <div className="reset col-md-6 container py-5">
        <div className="resetHeader">
            <h2 className="mb-5 text-center">Reset Your Password</h2>
        </div>
        <div className="contactform">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button type="submit" className="mt-3">Reset</Button>
            </Form>
        </div>
    </div>
  )
}

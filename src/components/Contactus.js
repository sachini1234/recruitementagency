import { Form, Button } from "react-bootstrap";
import "./styles/style.css";

export const Contactus = () => {
  return (
    <div className="col-md-6 container mt-5">
        <div className="d-flex justify-content-center">
            <div class="contactus">
                <div class="contactheader">
                    <h2 className="mb-5 pb-3">Lets's Talk</h2>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="contactform">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button type="submit" className="mt-2">Submit</Button>
                    </Form>
                </div>
                <div className="mt-4 d-md-flex">
                    <h6 className="mt-md-1 me-2">Or Send Message via E-mail:</h6>
                    <a href = "mailto: hirezone@gmail.com">hirezone@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  )
}

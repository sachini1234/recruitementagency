import React, { useState } from 'react';
import Topbar from './Signouttopbar';
import { NavBar } from "./NavBar";
import { Typewriter } from 'react-simple-typewriter';
import { CardGroup, Card, Button, Collapse, Form } from "react-bootstrap";
import testimon from "../assets/img2.jpg";
import banner from "../assets/img9.jpg";
import img1 from "../assets/img10.jpg";
import img2 from "../assets/img11.jpg";
import ChatBot from 'react-simple-chatbot';
import "./styles/style.css";

export const SignoutHome = () => {
    const [open, setOpen] = useState(false);

    const steps = [
        {
          id: 'Greet',
          message: 'Hi! Welcome to HIREZONE Recruitment Agency',
          trigger: 'Ask Name',
        },
        {
          id: 'Ask Name',
          message: 'Please enter your name here',
          trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, enter the job you want',
            trigger: 'waiting2',
        },
        {
            id: 'waiting2',
            user: true,
            trigger: 'Position',
        },
        {
            id: 'Position',
            message: 'Please select your location type',
            trigger: 'location-type',
        },
        {
            id: 'location-type',
            options: [
                {value: "On-site", label: "On-site", trigger: "On-site"},
                {value: "Hybrid", label: "Hybrid", trigger: "Hybrid"},
                {value: "Remote", label: "Remote", trigger: "Remote"},
            ],
        },
        {
            id: 'On-site',
            message: 'Please select your employment type',
            trigger: 'Employment-type',
        },
        {
            id: 'Hybrid',
            message: 'Please select your employment type',
            trigger: 'Employment-type',
        },
        {
            id: 'Remote',
            message: 'Please select your employment type',
            trigger: 'Employment-type',
        },
        {
            id: 'Employment-type',
            options: [
                {value: "Full-time", label: "Full-time", trigger: "Full-time"},
                {value: "Part-time", label: "Part-time", trigger: "Part-time"},
                {value: "Contract", label: "Contract", trigger: "Contract"},
                {value: "Internship", label: "Internship", trigger: "Internship"},
                {value: "Temporary", label: "Temporary", trigger: "Temporary"},
            ],
        },
        {
            id: 'Full-time',
            message: 'Thank you for contacting us. We will let you know if there are jobs that match your interest ',
            end: true
        },
        {
            id: 'Part-time',
            message: 'Thank you for contacting us. We will let you know if there are jobs that match your interest ',
            end: true
        },
        {
            id: 'Contract',
            message: 'Thank you for contacting us. We will let you know if there are jobs that match your interest ',
            end: true
        },
        {
            id: 'Internship',
            message: 'Thank you for contacting us. We will let you know if there are jobs that match your interest ',
            end: true
        },
        {
            id: 'Temporary',
            message: 'Thank you for contacting us. We will let you know if there are jobs that match your interest ',
            end: true
        }
    ];
  return (
    <div>
        <Topbar/>
        <NavBar/>
        <div className="banner">
            <Card className="text-white card">
                <Card.Img src={banner} alt="Card image"  />
                <Card.ImgOverlay className="col-xl-6 col-sm-8 col-12 text-start d-flex flex-column justify-content-center">
                    <div className="align-items-center">
                        <Card.Title>
                            {' '}
                            <span>
                            <Typewriter
                                words={['Partnering Your Talent Growth', 'Open Minds, Open Doors', 'Local Recruitment', 'Foreign Recruitment']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            </span>
                        </Card.Title>
                        <Card.Text className="my-4 text-start">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Card.Text>
                        <Button>Go somewhere</Button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div className="d-flex justify-content-end">
            <div className="chatbot">
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <ChatBot steps={steps}/>
                </div>
            </Collapse>
                <div className="mt-5">
                    <div className="pt-1">
                        <Button variant="link" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                            <div className="chat_icon">
                                <i className="fa fa-comments" aria-hidden="true"></i>
                            </div>
                        </Button> 
                    </div>   
                </div>
                            
            </div>
        </div>
        <div className="searchjob container mt-4">
            <div className="text-center">
                <h2 className="text-black-70">Find a job near you and start your new career</h2>
                <h5 className="mt-2">All the best opportunities with a single search</h5>
            </div>
            <div>
                <Form>
                    <div className="d-md-flex text-center mt-5">
                        <div className="d-sm-flex col">
                            <div className="col">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="text-black-50">Job Title</Form.Label>
                                    <Form.Control type="email" placeholder="Enter job title or a keyword..." />
                                </Form.Group>
                            </div>
                            <div className="col mx-sm-4">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="text-black-50">Location</Form.Label>
                                    <Form.Control type="password" placeholder="City, province or location..." />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="mt-4 pt-md-2">
                            <Button type="submit">
                            <i className="fa fa-search pe-2"></i>Search
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>

            <div className="col mt-4 d-md-flex">
                <div className="col-md-3 mb-md-0 mb-4 mt-md-5">
                    <div className=" p-3 mt-md-5 E-mailJobs">
                        <div>
                            <p>Get new jobs for this search by email</p>
                        </div>
                        <div>
                            <Form>
                                <Form.Control type="password" placeholder="Enter Your E-mail" />
                                <Button type="submit" className="mt-3">
                                    <i className="fa fa-envelope pe-2"></i>E-MAIL JOBS
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="jobs ms-md-5">
                    <h3 className="mb-5 pb-3">Latest Jobs at HIREZONE Recruitment</h3>
                    <div className="d-xxl-flex mb-3">
                        <div className="vacancy p-3">
                            <h5>Senior UI/UX Engineer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Kandy</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Temporary</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                        <div className="vacancy p-3 mx-xxl-5 mt-xxl-0 my-xxl-0 my-3">
                            <h5>React Native Engineer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Colombo</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Permenent</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                        <div className="vacancy p-3">
                            <h5>Senior Frontend Engineer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Pannipitiya</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Permenent</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="d-xxl-flex mb-3">
                        <div className="vacancy p-3">
                            <h5>Associate Web Developer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Rajagiriya</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Contarct</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                        <div className="vacancy p-3 mx-xxl-5 mt-xxl-0 my-3">
                            <h5>React Native Engineer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Colombo</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Internship</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                        <div className="vacancy p-3">
                            <h5>UI Developer</h5>
                            <ul>
                                <li className="d-flex"><i className="fa fa-map-marker mt-1 me-2"></i><p>Colombo</p></li>
                                <li className="d-flex my-2"><i className="fa fa-clock-o mt-1 me-2"></i><p>Temporary</p></li>
                                <li className="d-flex"><i className="fa fa-flag-o mt-1 me-2"></i><p>English</p></li>
                            </ul>
                            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is</p>
                            <div className="d-flex">
                                <Button type="submit" className="me-2">
                                    <i className="fa fa-chevron-circle-right pe-1"></i>More Details
                                </Button>
                                <Button type="submit">
                                    <i className="fa fa-check-square-o pe-1"></i>Easy Apply
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="text-decoration-none">Load More...</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="testimonials mt-5">
            <div className="testimon container">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="mb-5 pb-3">Testimonials</h2>
                    </div>
                    <div>
                        <a href="#" className="text-decoration-none">View All</a>
                    </div>
                </div>
                <div className="d-md-flex justify-content-center">
                    <div className="me-xl-5 testimon-img">
                        <img src={testimon} alt="" width="500" height="300" class=""/>
                    </div>
                    <div className="ms-xl-5 ps-md-5">
                        <div className="mb-lg-5 mb-3">
                            <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<span> "</span></p>
                            <p className="position ms-xl-5 ps-xl-5">Director Human Resources, and Industrial Relations Asia Pacific</p>
                        </div>
                        <div className="mb-lg-5 mb-3">
                            <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration randomised words which don't look even slightly believable.<span> "</span></p>
                            <p className="position ms-xl-5 ps-xl-5">Managing Director CCS</p>
                        </div>
                        <div className="mb-lg-5 mb-3">
                            <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations Lorem Ipsum, but the majority passages have form, by injected humour, or randomised words which don't look even slightly believable.<span> "</span></p>
                            <p className="position ms-xl-5 ps-xl-5">Manager HR – MAS FAR EAST</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand py-5">
                <div className="container">
                    <h2 className="fst-italic fw-normal text-center">We're a HIREZONE recruitment agency that has successfully matched exceptional candidates to employers of choice since 2000.</h2>
                </div>
            </div>
        </div>

        <div className="latesetnews mt-5">
            <div className="news container">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="mb-5 pb-3">Latest News</h2>
                    </div>
                    <div>
                        <a href="#" className="text-decoration-none">Read more</a>
                    </div>
                </div>
                <div className="cardgroup">
                    <CardGroup className="d-md-flex">
                        <Card className="card">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>What is hybrid working?</Card.Title>
                                <Card.Text>
                                    <p className="time">Last updated 3 mins ago</p>
                                    <p>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                </Card.Text>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </Card.Body>
                        </Card>
                        <Card className="card mx-md-3">
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Finance Recruitment Market Update</Card.Title>
                                <Card.Text>
                                    <p className="time">Last updated 20 mins ago</p>
                                    <p>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                </Card.Text>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Procurement & Supply Chain Recruitment</Card.Title>
                                <Card.Text>
                                    <p className="time">Last updated 46 mins ago</p>
                                    <p>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                </Card.Text>
                                <a href="#" className="text-decoration-none">View All</a>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>

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
    </div>  
  )
}

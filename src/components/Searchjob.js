import { Form, Button } from "react-bootstrap";
import "./styles/style.css";

export const Searchjob = () => {
  return (
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
  )
}

import React from 'react';
import "./styles/style.css";

export const Footer = () => {
  return (
    <div className="footer">
            <footer class="align-items-center text-center bg-dark py-5">
                <div className="container">
                    <div className="d-md-flex justify-content-center">
                        <div>
                            <h6 className="title fw-bolder">ABOUT US</h6>
                            <p><a className="cont text-white">Our Process</a></p>
                            <p><a className="cont text-white">Our Growth Story</a></p>
                            <p><a className="cont text-white">Vision & Values</a></p>
                            <p><a className="cont text-white">Meet Our Team</a></p>
                            <p><a className="cont text-white">Work For Us</a></p>
                            <p><a className="cont text-white">Partnerships</a></p>
                            
                        </div>

                        <div className="px-5 mx-5">
                            <h6 className="title fw-bolder">SPECIALISMS</h6>
                            <p><a className="cont text-white">Finance & Accountancy</a></p>
                            <p><a className="cont text-white">Human Resources</a></p>
                            <p><a className="cont text-white">Operations</a></p>
                            <p><a className="cont text-white">BI & Data</a></p>
                            <p><a className="cont text-white">Retained Services</a></p>
                        </div>

                        <div>
                            <h6 className="title fw-bolder">CONTACT</h6>
                            <p><a className="cont text-white"><i className="fa fa-envelope pe-2"></i> hirezone@gmail.com</a></p>
                            <p><a className="cont text-white"><i class="fa fa-regular fa-phone fa-rotate-90 pe-2"></i>037 4453451</a></p>
                            <p><a className="cont text-white"><i class="fa fa-regular fa-phone fa-rotate-90 pe-2"></i>011 4659421</a></p>
                        </div>

                        <div className="ps-md-5 ms-md-5">
                            <h6 className="title fw-bolder">Social Media</h6>
                            <div className="d-flex justify-content-center">
                                <a className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none me-1">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none mx-3">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none ms-1 me-3">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="d-flex justify-content-center align-items-center rounded-circle text-decoration-none ms-1">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

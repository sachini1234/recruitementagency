import React, { Component } from 'react';
import profile from "../assets/customer01.jpg";
import logo from "../assets/logo.png";
import { Dropdown } from "react-bootstrap";
import "./styles/style.css";
import { Link } from "react-router-dom";

export default class Signintopbar extends Component {
    render() {
        return (
            <div>
                <topbar className="fixed-top py-2 bg-light">
                    <div class="topbar container d-flex justify-content-between">
                        <div class="logo">
                            <a class="topbarbrand" href="#">
                                <img src={logo} alt="" width="100" height="50" class=""/>
                            </a>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="light">
                                    <img src={profile} alt="User Photo" width="30" height="30" class="d-inline-block align-text-center rounded-circle me-3"/>Oliver James
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link>My Resume</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <Link>My Account</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <Link>My Alerts</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <Link to="/">Signout</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </topbar>
            </div>
        )
    }
}

import React, { Component } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default class Signouttopbar extends Component {
    render() {
        return (
            <div>
                <topbar className="fixed-top py-2 bg-light">
                    <div className="topbar container d-flex justify-content-between">
                        <div className="logo">
                            <a className="topbarbrand" href="#">
                                <img src={logo} alt="" width="100" height="50" className=""/>
                            </a>
                        </div>
                        <div className="d-flex">
                            <Link to="/Signup">Register<span className="px-sm-2">|</span></Link>
                            <Link to="/Login">Login</Link>
                        </div>
                    </div>
                </topbar>
            </div>
        )
    }
}

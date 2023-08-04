import React, { useState } from 'react';
import { Button, Collapse } from "react-bootstrap";
import ChatBot from 'react-simple-chatbot';

import "./styles/style.css";

export const Chatbot = () => {
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
    ) 
}

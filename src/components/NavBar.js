import React, { useState } from 'react';
import { Navbar, Nav, Modal, Button, Table } from "react-bootstrap";
import "./styles/style.css";

export const NavBar = () => {
//   const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="Navbar">
        <Navbar bg="light" expand="md" className="mt-5 container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-3" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="mr-auto">
                  <Nav.Link href="#link">ABOUT US</Nav.Link>
                  <Nav.Link href="#link">SECTORS</Nav.Link>
                  <Nav.Link href="#link">SUCCESS STORIES</Nav.Link>
                  <Nav.Link href="#link">NEWS & INSIGHTS</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#link">
            <div className="notification">
              <Button variant="link" onClick={() => setLgShow(true)}>
                  <i class="fas fa-regular fa-bell"></i>
              </Button>
            </div>
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Your CV Status
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Table responsive className="table">
                      <thead>
                          <tr>
                              <th>id</th>
                              <th>Company Name</th>
                              <th>Position</th>
                              <th>Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>CSS</td>
                              <td>Web Developer</td>
                              <td><span className="pending">Pending</span></td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Noon.com</td>
                              <td>Associate Web Developer</td>
                              <td><span className="accepted">Accepted</span></td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>3INK</td>
                              <td>Associate Web Developer</td>
                              <td><span className="rejected">Rejected</span></td>
                          </tr>
                      </tbody>
                  </Table>
                </Modal.Body>
            </Modal>
          </Nav.Link>
        </Navbar>
    </div>
  )
}

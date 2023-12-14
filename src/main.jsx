import React from "react";
import ReactDOM from "react-dom/client";
import Courses from "./Courses.jsx";
import Syllabus from "./Syllabus.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses />,
  },
  {
    path: "/syllabus",
    element: <Syllabus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SI-OBE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Courses</Nav.Link>
            <Nav.Link href="/syllabus">Syllabus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);

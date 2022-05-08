import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import auth from "../../../firebase.init.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            {/* <h4>Fruits Warehouse</h4> */}
            <img src={logo} height="35px" alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="home#products">Products</Nav.Link>
            <Nav.Link href="home#dryFruits">DryFruits</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            {user ? (
              <button onClick={handleSignOut}>sign out</button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

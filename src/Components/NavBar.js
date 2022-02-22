import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../Views/Home";
import { Event } from "../Views/Event";
import { Explore } from "../Views/Explore";
import { Vote } from "../Views/Vote";
import { MyWallet } from "../Views/MyWallet";
import { MyProfile } from "../Views/MyProfile";

export const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              NFT
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/event"}>
                活動
              </Nav.Link>
              <Nav.Link as={Link} to={"/vote"}>
                投票
              </Nav.Link>
              <Nav.Link as={Link} to={"/explore"}>
                探索
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/my-wallet"}>
                點數
              </Nav.Link>
              <NavDropdown
                title={<FontAwesomeIcon icon="user" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to={"/my-profile"}>個人主頁</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">登出</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-wallet" element={<MyWallet />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;

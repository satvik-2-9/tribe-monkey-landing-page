import React from 'react'
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/tribe_logo.jpg'
import './App.css'
function App() {
  return (
    <div className="App">

      <div className="header">
          <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="yo" className="logo"></img>
            </Navbar.Brand>
            <Nav className="me-auto gp">
              <Nav.Link href="#home">Benefit</Nav.Link>
              <Nav.Link href="#features">Feature</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
              <Nav.Link href="#pricing" className="blog">Blog</Nav.Link>
            </Nav>
            <Nav className="me-auto gp" className="third">
              <Nav.Link href="#home" className="login">Login</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      </div>

      <div className="first">
        <Row className="rr">
          <Col>
              
            <div className="crd">
              <div className="heading">
                India's first platform
                <div className="pt2">
                for Stock Advisors 
                </div>
              </div>
              <div className="txt">
                  Focus on what matters - market research, and leave the rest to us. Increase the returns for yourself as well as your subscribers.
                  Built for day traders, swing traders and long term investors. 

              </div>
              <div className="btn-grp"></div>
            </div>
            
          </Col>
              
          <Col>
            a
        </Col>
        </Row>
      </div>
      
    </div>
  );
}

export default App;

import React from 'react'
import {Navbar,Nav,Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/tribe_logo.jpg'
import ReactPlayer from "react-player"
import './App.css'
function App() {
  return (
    <div className="App">
      
      <div className="header">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="yo" className="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto gp">
              <Nav.Link href="#home">Benefit</Nav.Link>
              <Nav.Link href="#features">Feature</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
              <Nav.Link href="#pricing" className="blog">Blog</Nav.Link>
              </Nav>
              <Nav className="gp2">
              <Nav.Link href="#home" className="login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
                <div className="a">
                  Focus on what matters - <span className="mrk">market research</span>, and leave the rest to us. Increase the returns for yourself as well as your subscribers.
                </div>
                <div className="b">
                  Built for day traders, swing traders and long term investors.
                </div>
              </div>
              <div className="btn-grp">
                <div className="btrow">
                  <Button id="bt1" className="bt1" onClick={() => {
                    document.getElementById("bt1").style.backgroundColor ="#5850EC";
                  }}>Get Started</Button>
                  <Button className="bt2" id="bt2" onClick={() => {
                    document.getElementById("bt1").style.backgroundColor = "white";
                  }}>Try Free Demo </Button> 
                </div>
              </div>
            </div>
            
          </Col>
              
          <Col>
            <div className="vid-div">
          <ReactPlayer className="player" url='https://vimeo.com/608114806'/>
          </div>
        </Col>
        </Row>
      </div>
      <div className="second">
        <div className="s1">
        Supported platforms
        </div>
        <div className="s2">
        Integrated with leading trading platforms to ensure a great trading experience for investors.
        </div>
        <div className="s3">
          <div className="cnt">
            Brokers
            <div className="img-grp">
              <img className="img-1" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630993995057x223591772131760200%2FBlank-cover.png?w=128&h=47&auto=compress&fit=crop&dpr=1"></img>
              <img className="img-2" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630994030977x374872003523181200%2F1200x630-1606469976495.jpg?w=128&h=47&auto=compress&fit=crop&dpr=1"></img>
            </div>
          </div>
          <div className="cnt2">
            Subscriptions
            <div className="img-grp">
            <img className="img-1 tt" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630994159429x800354335691429400%2FTelegram-logo-Featured-1024x538.jpg?w=128&h=47&auto=compress&fit=crop&dpr=1"></img>
            <img className="img-2" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630994269666x868091493032259800%2F140_whatsapp.jpg?w=128&h=47&auto=compress&fit=crop&dpr=1"></img>  
          </div>
          </div>
          <div className="cnt3">
            Technical Analysis
            <div className="img-grp2">
            <img  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630994311926x353454613026634750%2Ftradingview-logo-vector.png?w=128&h=47&auto=compress&fit=crop&dpr=1"></img>
            </div>  
          </div>
        </div>
      </div>
      
      <div className="bw">
        <div className="head">Top Experts at Tribe</div>
        <div className="bwa">
          
          <Row className="rw2">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />
          <Row className="rw2">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />
          <Row className="rw2">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />

        </div>
        <div className="head2">Latest Tips at Tribe</div>
        <div className="bwb">
        <Row className="rw2">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />
          <Row className="rw2">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />
          <Row className="rw2 ">
            <Col> <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1633592643441x699344130915025300%2Fpasra.jpg?w=64&h=64&auto=compress&dpr=1&mask=ellipse&q=75&fit=max" alt="ffimage"></img> </Col>
            <Col> <div>Tradeparadise</div><div className="gg">Member since Oct 8, 2021</div>  </Col>
            <Col><div>₹645515</div><div className="gg">P&L</div> </Col>
            <Col><div>31%</div><div className="gg">Hit Ratio</div> </Col>
            <Col><div>120</div><div className="gg"># of tips</div> </Col>
            <Col><div className="a2">$</div> </Col>
          </Row>
          <hr className="brk" />
        </div>
      </div>
       
      <div className="third">
        <Row> 
          <Col>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="fourth">
        <Row className="rr3" >
          <Col className="ffg">
            <div className="a4">BENEFIT</div>
            <div className="b4">Become a World Class Advisor</div>
            <div className="c4">Feature rich, easy to use platform to transform your advisory services.</div>
            <div className="ffa">
              <div className="a2">$</div>
              <div className="a3">
                <div className="a"> Monetize your portfolio and trades</div>
                <div className="b"> Get the most of your skill sets by focusing on what's important</div>
              </div>
            </div>
            <div className="ffa" >
              <div className="a2">$</div>
              <div className="a3">
                <div className="a"> Build your follower base and retain them</div>
                <div className="b">Our platform has the required tools for you to discover new followers and help them generate incremental returns</div>
               </div>
            </div>
            <div className="ffa">
               <div className="a2">$</div>
              <div className="a3">
                <div className="a">Manage your operations effortlessly</div>
                <div className="b">Save 3 hrs everyday: Invest time & effort in research not operations</div>
               </div>
            </div>
            <div className="ffa">
               <div className="a2">$</div>
               <div className="a3">
                <div className="a">Teach other people how to invest</div>
                <div className="b">Help retail investors with live (group or 1-on-1 )  sessions with the followees</div>
              </div>
            </div>

          </Col>
          <Col>
            <div className="sec">
              <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630950520056x241635981967911260%2F21Untitled.png?w=&h=&auto=compress&dpr=1&fit=max" alt="4th image"></img>
             </div>
          </Col>
        </Row>
      </div>
      <div className="fifth">
        <Row className="rw4">
          <Col className="aa">
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1630950397549x762493107398123400%2F21Untitled.png?w=384&h=&auto=compress&dpr=2&fit=max"></img>
          </Col> 
          <Col className="bb">
          <div className="a4">FEATURE</div>
            <div className="b4">How we do it?</div>
            <div className="c4">Tribe is India's first platform built keeping in mind the requirements of stock advisors. Built by experts for experts.</div>
            <div className="ffa">
              <div className="a2">$</div>
              <div className="a3">
                <div className="a"> Create & share a new tip in less than 30 secs</div>
                <div className="b"> Still manually typing your tips? Our 1 click interface allows you to quickly share the tips with your subscribers to any social platform</div>
              </div>
            </div>
            <div className="ffa" >
              <div className="a2">$</div>
              <div className="a3">
                <div className="a"> Automated real time alerts and performance reports</div>
                <div className="b">Our smart AI alerts you when the target is met, or if the stop loss is hit saving you from manually tracking your tips</div>
               </div>
            </div>
            <div className="ffa">
               <div className="a2">$</div>
              <div className="a3">
                <div className="a">Engage with your followers</div>
                <div className="b">Legacy platforms do not allow advisors to understand followers' investment behavior and work towards improving their returns.</div>
               </div>
            </div>
            <div className="ffa">
               <div className="a2">$</div>
               <div className="a3">
                <div className="a">Membership tiers </div>
                <div className="b">The platform has features like personalized portfolio review, trial packs, etc. based on membership tier to generate more revenue.</div>
              </div>
            </div>
          </Col> 
        </Row>
      </div>
      <div className="sixth">
      <div className="a4">PRICING</div>
            <div className="b4">Boost Your Growth</div>
        <div className="c4 kk">Multiply your returns with a platform built for you</div>
        <div className="content">Running a special promo for first 50 experts. Please reach out to us directly for details</div>
        <div className="finale">
          <Row className="wrap">
            <Col className="fna" sm={8}>
            Have any questions? Or, would like a product demo?
            </Col>
            <Col className="fnb" sm={4}>
              <Button variant="light" className="final-bt"> Contact Us Today </Button>
            </Col>
          </Row>
        </div>
        <div className="tg">
        © BETTER WEALTH TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
     
      <div className="seventh"></div>
      
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import { Navbar, Nav} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from "react-router-bootstrap";
//import { Link } from 'react-router-dom'

function Article(props) {
  return (<article>
    <div className="article-title">
      <a href="/" title={props.title}>{props.title}</a>
    </div>
    <div className="article-body">
    {props.articleShrink}
    </div>
  </article>);
}
function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap" rel="stylesheet"></link>
        <div>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Terminal diaries</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav className="ml-auto">
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
              </Nav>
            </Navbar>
          </div>
        </header>
        <div className="articles">
        <Container>
         <Row></Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
            <Article title="ASDASDASDASDASDASD" articleShrink="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Col>
          </Row>
        </Container>
        </div>
    </div>
  );
}

export default App;

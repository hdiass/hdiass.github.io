import React from 'react';

import './App.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'

function Article(props) {
  return (<article>
    <div className="article-title">
      <Link to="/about">{props.title}</Link>
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
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap" rel="stylesheet"></link>
        <div>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Terminal diaries</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
        <div className="articles">
        <Container>
         <Row></Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
            <Article title="Some Sweet Article" articleShrink="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            <Article title="Some Top Article" articleShrink="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            <Article title="Some Nice Article" articleShrink="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </Col>
          </Row>
        </Container>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
// import { Jumbotron } from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
  return (

    <Container fluid={true} className="bg-transparent jumbotron-fluid p-0">
      <Row className="justify-content-center py-5">
        <Col md={8} sm={12}>
          {props.subTitle && <h3 className="display-4 font-weight-lighter">{props.subTitle}</h3>}
          {props.title && <h1 className="display-1 bolder">{props.title}</h1>}
          {props.text && <h3 className="lead font-weight-bolder">{props.text}</h3>}
        </Col>
      </Row>
    </Container>

  );
}

export default Hero;
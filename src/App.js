import React, { Component } from "react";
import { RouterIndex } from "./components/Routes/Index";
import "./App.css";

import { Row, Col, Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <RouterIndex />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

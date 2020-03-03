import React, { Component } from "react";

import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";

class CreateNote extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container className="mb-4" style={{display: this.props.show? null : "none"}}>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                <Form onSubmit={e => this.props.handleSubmit(e)}>
                  <Form.Group controlId="formGroupTitle">
                    <input type="text" onChange={e => this.props.handleChange(e)} placeholder="Title" name="title" value={this.props.note.title} />
                  </Form.Group>
                  <Form.Group controlId="formGroupBody">
                    <textarea value={this.props.note.body} onChange={e => this.props.handleChange(e)} size="sm" name="body" placeholder="Take a note..." />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    close
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateNote;

import React, { Component } from "react";

import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {id: "", title: "", body: "", updated_at: ""},
      
    };


  }

  render() {
    return (
      <Container className="mb-4">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                <Form onSubmit={e => this.props.handleSubmit(e)}>
                  <Form.Group controlId="formGroupTitle">
                    <Form.Control type="text" onChange={e => this.props.handleChange(e)} placeholder="Title" name="title" value={this.props.note.title} />
                  </Form.Group>
                  <Form.Group controlId="formGroupBody">
                    <Form.Control as="textarea" value={this.props.note.body} onChange={e => this.props.handleChange(e)} size="sm" name="body" placeholder="Take a note..." rows="1" />
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

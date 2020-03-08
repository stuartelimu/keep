import React, { Component } from "react";
import { Card, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Remarkable } from "remarkable";

class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.item
    };
  }

  getRawMarkup() {
    const md = new Remarkable();

    return { __html: md.render(this.state.note.body) };
  }

  render() {
    return (
      <Card>
        <Card.Body onClick={() => this.props.renderSingleItem(this.state.note.id)}>
          <Card.Title>{this.state.note.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={this.getRawMarkup()}></Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-auto" aria-label="First group">
              <span className="action-button rounded-circle">
                <i className="fa fa-thumb-tack" aria-hidden="true"></i>
              </span>
              <span className="action-button rounded-circle">
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </span>
            </ButtonGroup>

            <ButtonGroup className="ml-auto" aria-label="Third group">
              <span
                className="action-button rounded-circle"
                onClick={() => this.props.handleDelete(this.state.note.id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </span>
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Footer>
      </Card>
    );
  }
}

export default NoteItem;

import React from "react";
import { Card, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const NoteItem = props => {
  return (
    <Card>
      <Card.Body onClick={() => props.renderSingleItem(props.id)}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={props.body}></Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-auto" aria-label="First group">
            <span className="action-button rounded-circle"><i className="fa fa-thumb-tack" aria-hidden="true"></i></span>
            <span className="action-button rounded-circle"><i className="fa fa-eye-slash" aria-hidden="true"></i></span>
            
          </ButtonGroup>

          

          <ButtonGroup className="ml-auto" aria-label="Third group">
            <span className="action-button rounded-circle" onClick={() => props.handleDelete(props.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
};

export default NoteItem;

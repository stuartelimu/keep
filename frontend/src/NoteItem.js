import React from "react";
import { Card } from "react-bootstrap";

const NoteItem = (props) => {
  return (
    <Card onClick={() => props.renderSingleItem(props.id)}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">Last updated {props.updated_at}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoteItem;

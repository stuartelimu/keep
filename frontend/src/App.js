import React, { Component } from "react";
import "./App.css";
import NoteItem from "./NoteItem";
import { Container, Row, CardColumns } from "react-bootstrap";

const noteItems = [
  {
    id: 1,
    title: "Go to Market",
    body: "Buy ingredients to prepare dinner",
    created_at: "2020-01-21T23:55:48.778899+03:00",
    updated_at: "2020-01-21T23:55:48.778936+03:00"
  },
  {
    id: 2,
    title: "Study",
    body: "Read Algebra and History textbook for upcoming test",
    created_at: "2020-01-21T23:55:48.778899+03:00",
    updated_at: "2020-01-21T23:55:48.778936+03:00"
  },
  {
    id: 3,
    title: "Sally's books",
    body: "Go to library to rent sally's books",
    created_at: "2020-01-21T23:55:48.778899+03:00",
    updated_at: "2020-01-21T23:55:48.778936+03:00"
  },
  {
    id: 4,
    title: "Article",
    body: "Write article on how to use django with react",
    created_at: "2020-01-21T23:55:48.778899+03:00",
    updated_at: "2020-01-21T23:55:48.778936+03:00"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: false,
      noteList: noteItems
    };
  }

  renderSingleItem = id => {
    let noteData = {};
    this.setState({
      noteList: this.state.noteList.map(noteItem => {
        if (noteItem.id === id) {
          noteData = {
            ...noteItem,
            isShowing: !noteItem.isShowing
          };

          return noteData;
        }

        return noteItem;
      })
    });
  };

  renderItems = () => {
    const notes = this.state.noteList.map(note => (
      <NoteItem
        key={note.id}
        title={note.title}
        body={note.body}
        updated_at={note.updated_at}
        isShowing={this.state.isShowing}
      />
    ));

    return notes;
  };

  render() {
    return (
      <Container>
        <Row>
          <CardColumns>{this.renderItems()}</CardColumns>

          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          
        </Row>
      </Container>
    );
  }
}

export default App;

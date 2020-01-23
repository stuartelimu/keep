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
    let noteData = {}
    this.setState()
  }

  renderItems = () => {
    const notes = this.state.noteList.map(note => (
      <NoteItem
        key={note.id}
        title={note.title}
        body={note.body}
        updated_at={note.updated_at}
      />
    ));

    return notes;
  };

  render() {
    return (
      <Container>
        <Row>
          <CardColumns>
            {this.renderItems()}
          </CardColumns>
        </Row>
      </Container>
    );
  }
}

export default App;

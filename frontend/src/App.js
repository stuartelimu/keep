import React, { Component } from "react";
import "./App.css";
import NoteItem from "./NoteItem";
import NavigationBar from "./NavigationBar";
import MyVerticallyCenteredModal from "./components/Modal";
import { Container, Row, CardColumns } from "react-bootstrap";
import CreateNote from "./CreateNote";

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
      noteList: noteItems,
      showModal: false,
      note: {
        id: "",
        title: "",
        body: "",
        updated_at: ""
      }
    };

    this.renderSingleItem = this.renderSingleItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      note: {
        ...this.state.note,
        [name]: value
      }
    });

    console.log(this.state.note);
  }

  handleSubmit(e) {
    e.preventDefault();

    const savedNote = {
      id: Date.now(),
      title: this.state.note.title,
      body: this.state.note.body,
      updated_at: "2020-01-21T23:55:48.778936+03:00"
    };

    const updatedNote = this.state.note;

    const updatedNotes = this.state.noteList.map(note => {
      if (note.id === updatedNote.id) {
        note = { ...updatedNote };
      }
      return note;
    });

    this.state.showModal
      ? this.setState({
          noteList: updatedNotes,
          showModal: false,
          note: { id: "", title: "", body: "", updated_at: "" }
        })
      : this.setState(prevState => {
          return {
            noteList: prevState.noteList.concat(savedNote),
            note: { id: "", title: "", body: "", updated_at: "" }
          };
        });

    console.log(this.state.noteList);
  }

  // handleEdit(e, id) {
  //   const updatedNote = {id: Date.now(), title: this.state.note.title, body: this.state.note.body, updated_at: "2020-01-21T23:55:48.778936+03:00"}

  // }

  renderSingleItem = id => {
    let activeNote = {};
    console.log(id);
    this.setState({
      noteList: this.state.noteList.map(note => {
        if (note.id === id) {
          activeNote = { ...note };

          return activeNote;
        }

        return note;
      })
    });

    console.log(activeNote);

    this.setState({
      note: activeNote,
      showModal: true
    });
  };

  renderItems = () => {
    const notes = this.state.noteList.map(note => (
      <NoteItem
        id={note.id}
        key={note.id}
        title={note.title}
        body={note.body}
        updated_at={note.updated_at}
        renderSingleItem={this.renderSingleItem}
      />
    ));

    return notes;
  };

  render() {
    return (
      <>
        <NavigationBar />

        <Container className="mt-5">
          <Row>
            <CreateNote
              note={this.state.note}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />

            <CardColumns>{this.renderItems()}</CardColumns>

            <MyVerticallyCenteredModal
              show={this.state.showModal}
              // onHide={this.handleSubmit}
              title={this.state.note.title}
              body={this.state.note.body}
              updated_at={this.state.note.updated_at}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />

            {/* <ButtonToolbar>
            <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
              Launch vertically centered modal
            </Button>

            
          </ButtonToolbar> */}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

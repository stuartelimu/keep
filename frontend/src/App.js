import React, { Component } from "react";
import "./App.css";
import NoteItem from "./NoteItem";
import NavigationBar from "./NavigationBar";
import MyVerticallyCenteredModal from "./components/Modal";
import { Container, Row, CardColumns } from "react-bootstrap";
import CreateNote from "./CreateNote";
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// axios.post("/api/login/", {username: "stue", password: "stue"})
//   .then(response => console.log("Login", response))
//   .catch(err => console.log("LOgin failed", err.response))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [],
      showModal: false,
      note: {
        title: "",
        body: ""
      }
    };

    this.renderSingleItem = this.renderSingleItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.refreshNoteList = this.refreshNoteList.bind(this);
  }

  componentDidMount() {
    // xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://127.0.0.1:8000/api/notes/", true);
    // xhr.send();

    // xhr.addEventListener("readystatechange", this.refreshNoteList, false);

    this.refreshNoteList();
  }

  refreshNoteList() {
    // if (xhr.readyState === 4 && xhr.status === 200) {
    //   let response = JSON.parse(xhr.responseText);

    //   console.log(response);

    //   this.setState({
    //     noteList: response
    //   })
    // }

    axios
      .get("/api/notes/")
      .then(response => this.setState({ noteList: response.data }));
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      note: {
        ...this.state.note,
        [name]: value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const savedNote = {
      title: this.state.note.title,
      body: this.state.note.body
    };

    const updatedNote = this.state.note;

    if (this.state.showModal) {
      axios
        .put(`/api/notes/${updatedNote.id}/`, updatedNote)
        .then(response => this.refreshNoteList())
        .then(response =>
          this.setState({ note: { title: "", body: "" }, showModal: false })
        );
    } else {
      axios
        .post("/api/notes/", savedNote)
        .then(response => this.refreshNoteList())
        .then(response =>
          this.setState({ note: { title: "", body: "" }, showCreate: false })
        );
    }
  }

  handleDelete(id) {
    axios.delete(`/api/notes/${id}`).then(response => this.refreshNoteList());
  }

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
        handleDelete={this.handleDelete}
      />
    ));

    return notes;
  };

  render() {
    return (
      <>
        <NavigationBar
          handleCreate={() => this.setState({ showCreate: true })}
        />

        <Container className="mt-5">
          <Row>
            <CreateNote
              show={this.state.showCreate}
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
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

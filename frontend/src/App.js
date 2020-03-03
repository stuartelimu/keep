import React, { Component } from "react";
import "./App.css";
import NoteItem from "./NoteItem";
import NavigationBar from "./NavigationBar";
import MyVerticallyCenteredModal from "./components/Modal";
import { Container, Row, CardColumns } from "react-bootstrap";
import CreateNote from "./CreateNote";
import axios from "axios";

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

let xhr;

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
        body: "",
        
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

    axios.get("/api/notes/")
      .then(response => this.setState({noteList: response.data}))
    

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
      
      title: this.state.note.title,
      body: this.state.note.body,
      
    };

    const updatedNote = this.state.note;

    const updatedNotes = this.state.noteList.map(note => {
      if (note.id === updatedNote.id) {
        note = { ...updatedNote };
      }
      return note;
    });

    if (this.state.showModal) {

      // this.setState({
      //   noteList: updatedNotes,
      //   showModal: false,
      //   note: { id: "", title: "", body: "", updated_at: "" }
      // })

      axios.put(`/api/notes/${updatedNote.id}/`, updatedNote)
        .then(response => this.refreshNoteList())
        .then(response => this.setState({note: {title: "", body: "" },
        showModal: false}))

    } else {
      // let csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      // console.log(savedNote);
      // console.log(csrftoken)
      // xhr.open("POST", "http://127.0.0.1:8000/api/notes/", true);
      // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // xhr.setRequestHeader("X-CSRFToken", csrftoken);
      // xhr.send(JSON.stringify(savedNote));

      // xhr.addEventListener("readystatechange", this.refreshNoteList, false);
      

      axios.post("/api/notes/", savedNote)
        .then(response => this.refreshNoteList())
        .then(response => this.setState({note: {title: "", body: "" },
                showCreate: false}))

    }
    // this.state.showModal
    //   ? this.setState({
    //       noteList: updatedNotes,
    //       showModal: false,
    //       note: { id: "", title: "", body: "", updated_at: "" }
    //     })
    //   : this.setState(prevState => {
    //       return {
    //         noteList: prevState.noteList.concat(savedNote),
    //         note: { id: "", title: "", body: "", updated_at: "" },
    //         showCreate: false
    //       };
    //     });



    console.log(this.state.noteList);
  }

  handleDelete(id) {
    // const updatedNotes = this.state.noteList.filter(note => {
    //   return note.id !== id;
    // })

    axios.delete(`/api/notes/${id}`)
      .then(response => this.refreshNoteList())

    // this.setState({noteList: updatedNotes});
    // console.log(id);
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
        <NavigationBar handleCreate={() => this.setState({showCreate: true})} />

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

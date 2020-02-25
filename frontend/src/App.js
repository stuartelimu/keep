import React, { Component } from "react";
import "./App.css";
import NoteItem from "./NoteItem";
import NavigationBar from "./NavigationBar";
import MyVerticallyCenteredModal from './components/Modal'
import { Container, Row, CardColumns, Button, Navbar } from "react-bootstrap";

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
      noteList: noteItems,
      modalShow: false,
      activeItem: {
        title: "",
        body: "",
        updated_at: ""
      }
    };
    this.renderSingleItem = this.renderSingleItem.bind(this);
  }

  renderSingleItem = id => {
    let activeItemNow = {};
    this.setState(prevState => {
      const newNotes = prevState.noteList.map(data => {
        if (data.id === id) {
          activeItemNow = {
            title: data.title,
            body: data.body,
            updated_at: data.updated_at
          }
          return activeItemNow;
        }
        return data;
      });
      return {noteList: newNotes, activeItem: activeItemNow, modalShow: true}
    })
    // this.setState({modalShow: true})
    console.log(this.state.activeItem);
  };

  renderItems = () => {
    const notes = this.state.noteList.map(note => (
      <NoteItem
        key={note.id}
        title={note.title}
        body={note.body}
        updated_at={note.updated_at}
        isShowing={this.state.isShowing}
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
          <CardColumns>{this.renderItems()}</CardColumns>
          
          <MyVerticallyCenteredModal
              show={this.state.modalShow}
              onHide={() => this.setState({modalShow: false})}
              title={this.state.activeItem.title}
              body={this.state.activeItem.body}
              updated_at={this.state.activeItem.updated_at}
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

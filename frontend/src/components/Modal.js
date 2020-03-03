import React, { Component } from "react";
import { Modal, Button, Form, } from "react-bootstrap";

class MyVerticallyCenteredModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={e => this.props.handleSubmit(e)}>
          <Modal.Header>
            <input type="text" value={this.props.title} name="title" onChange={(e) => this.props.handleChange(e)} />
          </Modal.Header>
          <Modal.Body>
            <textarea value={this.props.body} name="body" onChange={(e) => this.props.handleChange(e)} />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <ButtonToolbar>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </ButtonToolbar>
//   );
// }

// render(<App />);

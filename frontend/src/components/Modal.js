import React, {Component} from 'react'
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
      <Modal.Header>

        <input type="text" value={props.title} />

      </Modal.Header>
      <Modal.Body>
        
        <textarea value={props.body} />

        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
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
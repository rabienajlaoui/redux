import { useState } from "react";
import { Modal,Button } from "react-bootstrap";
import { edittodo } from "../Actions";
import {useDispatch} from 'react-redux'

function EditModal({desc,id,done}) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState(desc)
    const handleSubmit = (e) => { 
        e.preventDefault()
        // dispatch update action
        dispatch(edittodo({id,desc:input}))
        handleClose()
     }
    return (
      <>
        <Button variant="btn btn-outline-primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default EditModal
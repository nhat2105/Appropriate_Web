import { Button, Modal } from "react-bootstrap";
import React from 'react'
import handwritten from "../assets/characters/toni/letter/handwritten.jpg"

function ModalBackupPage({show, onClose}) {
  return (
    <Modal
        className='modal-container'
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            ALERT - Please close this now if you are performing
        </Modal.Header>

        <img src={handwritten} alt="" width="100%" />

        <Modal.Footer>
            <Button variant='primary' onClick={onClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalBackupPage
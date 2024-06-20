import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalLetterPage({show, onClose, char}) {
  return (
    <Modal
        className='modal-container'
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>{char.charName}</Modal.Title>
        </Modal.Header>

        {/**Corresponding gif here */}
        <img style={{justifySelf: 'center'}} src={char.letter} alt='' />

        <Modal.Footer>
            <Button variant='primary' onClick={onClose}>Close</Button>
        </Modal.Footer>

    </Modal>
  )
}

export default ModalLetterPage
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ModalBackupPage from './ModalBackupPage'

function ModalLetterPage({show, onClose, char}) {
  const [showBackup, setShowBackup] = useState(false)

  function openModal(){
    setShowBackup(true)
  }

  function closeModal(){
    setShowBackup(false)
  }

  return (
    <Modal
        className='modal-container'
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
    >
        {showBackup && <ModalBackupPage show={showBackup} onClose={closeModal} />}

        <Modal.Header closeButton>
            <Modal.Title>{char.charName}</Modal.Title>
        </Modal.Header>

        {/**Corresponding gif here */}
        <img style={{justifySelf: 'center'}} src={char.letter} alt='' />

        <Modal.Body>
        {char.id === 6 && 
            <Button variant='secondary' onClick={openModal}
            >Please <b>don't</b> press here if you are on stage today</Button>}
        </Modal.Body>

        <Modal.Footer>
            <Button variant='primary' onClick={onClose}>Close</Button>
        </Modal.Footer>

    </Modal>
  )
}

export default ModalLetterPage
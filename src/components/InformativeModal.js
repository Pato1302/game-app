import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './InformativeModal.css'

export const InformativeModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} size='lg'>
        <Modal.Header style={{fontWeight:'bold'}}> {props.title} </Modal.Header>
        <Modal.Body> <img src={props.icon} alt=''/> {props.message} </Modal.Body>
        <Modal.Footer className='ctr'>
            <Button variant='primary' onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
    </Modal>
  )
}

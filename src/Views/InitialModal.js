import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function I(props){

    const [lgShow, setLgShow] = useState(true);
    let title = 'विचार';
    return(
        <Modal
            size="lg"
            show={lgShow}
            className = "modal-font"
            onHide={() => {setLgShow(false); props.hide(true)}}
            >
            <Modal.Header className = "" closeButton>
                <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This a a test Modal.
            </Modal.Body>
        </Modal>
    )
}

export default I;
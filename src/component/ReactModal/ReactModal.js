import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
  const { title, price, description, image } = props.details;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-75">
      <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="d-flex align-iteam-center">
              <div>
                <img className="w-50 img-fluid" src={image} alt="" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description.slice(0, 20)}</p>
                <h4>{price}</h4>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
export default ReactModal;

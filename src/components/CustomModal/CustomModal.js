import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default function CustomModal(props) {

  const {
    className,
    buttonColor,
    buttonLabel,
    scrollable,
    size,
    children,
    backdrop,
    opened,
    outline,
    subscribing,
    modalTitle
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal)

  const CloseBtn = <i className="eva eva-close cursor-pointer" onClick={toggle}/>

  return (
    <>
      <Button className="btn-rounded mr-4 mb-3" outline={outline} color={buttonColor} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal || opened} backdrop={backdrop} toggle={toggle} size={size} className={className} scrollable={scrollable}>
        <ModalHeader toggle={toggle} close={CloseBtn} className="headline-1">{modalTitle || "Use Google's location service?"}</ModalHeader>
        {scrollable
          ? <ModalBody>
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </ModalBody>
          : <ModalBody>
            {children}
          </ModalBody>
        }
        <ModalFooter>
          {
            subscribing
              ? <div className="mx-auto">
                <Button className="btn-rounded btn-outline-secondary mr-3" outline onClick={toggle}>Cancel</Button>
                <Button className="btn-rounded" color="primary" onClick={toggle}>Subscribe</Button>
              </div>
              : <div  className="mx-auto">
                <Button className="btn-rounded btn-outline-secondary mr-3" outline onClick={toggle}>Agree</Button>
                <Button className="btn-rounded" color="primary" onClick={toggle}>Disagree</Button>
              </div>
          }
        </ModalFooter>
      </Modal>
    </>
  )
}

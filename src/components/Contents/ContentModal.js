
import React from 'react';
import { Modal } from 'react-bootstrap'

import ResponsivePlayer from './Video'
import OwlCorousel from './OwlCorousel'

const ContentModal = (props) => {
  const { show, closeModalHandler, data, content } = props;



  return (
    <div>
      <Modal show={show} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{content.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsivePlayer video={content.url} />
          <OwlCorousel data={data} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ContentModal;
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from '../../assets/close-24px.svg';
import './Modal.css';

const Modal = ({ closeModal, children }) => {
  return (
    <>
      <div className="modal--backdrop" onClick={closeModal} />
      <div className="modal">
        <div className="modal--content">
          <div className="modal--heading-actions">
            <Close className="modal--close" onClick={closeModal} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const portalRoot = document.getElementById('portal-root')
const UIModal = ({ children, isOpen, onclickClose }) => {
  if (!isOpen) {
    return null;
  };

  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button type="button"
          className="ui-modal__close-button"
          onClick={onclickClose} >X</button>
        {children}
      </div>
    </div>,
    portalRoot,
  );

}

export default UIModal;
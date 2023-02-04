import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    const { src, handleClose } = this.props;

    window.addEventListener('keydown', key => {
      if (key.code === 'Escape') {
        handleClose();
      }
    });

    return (
      <div>
        <div>
          <button onClick={handleClose}>close</button>
        </div>
        <div className={css.overlay}></div>
        <div className={css.modal}>
          <img alt="" src={src}></img>
        </div>
      </div>
    );
  }
}

export default Modal;

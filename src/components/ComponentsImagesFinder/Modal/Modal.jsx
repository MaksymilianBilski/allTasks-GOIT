import css from './Modal.module.css';

const Modal = ({ src, handleClose }) => {
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
      <div className={css.overlay} onClick={handleClose}></div>
      <div className={css.modal}>
        <img className={css.img} alt="" src={src}></img>
      </div>
    </div>
  );
};

export default Modal;

import styles from './modal.module.css';

const Modal = ({ isOpenModal, children, onClose }) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.container}>
            <div className={styles.modal}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

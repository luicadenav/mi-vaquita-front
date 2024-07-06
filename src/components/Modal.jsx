const Modal = ({ isOpenModal, children, onClose }) => {
  return (
    <>
      {isOpenModal && (
        <div className="fixed inset-0 z-50 px-5">
          <div
            className="fixed inset-0 bg-black bg-opacity-70"
            onClick={onClose}
          ></div>
          <div className="relative z-50 top-1/4 max-w-[400px] mx-auto bg-white p-4 rounded shadow-lg">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

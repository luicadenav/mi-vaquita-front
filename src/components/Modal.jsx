const Modal = ({ isOpenModal, children, onClose }) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-20'
            onClick={onClose}
          ></div>
          <div className='flex justify-center h-full w-full absolute'>
            <div className='absolute opacity-100 z-30'>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

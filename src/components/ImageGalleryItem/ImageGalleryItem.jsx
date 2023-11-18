import { useState } from 'react';
import { Img, ImgItem } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ smallImg, bigImg, alt }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <ImgItem onClick={openModal}>
        <Img src={smallImg} alt={alt} />
      </ImgItem>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={bigImg} alt={alt} />
      </Modal>
    </>
  );
};

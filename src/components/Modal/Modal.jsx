import { Overlay, StyledModal } from './Modal.styled';

export const Modal = ({ src, alt, forClose }) => {
  return (
    <Overlay
      onKeyDown={evt => {
        console.log(evt.key);
      }}
    >
      <StyledModal>
        <img className="js-modal" src={src} alt={alt} />
      </StyledModal>
    </Overlay>
  );
};

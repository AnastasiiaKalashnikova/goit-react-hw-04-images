import { LoadMore } from './Button.styled';

export const Button = ({ children, onClick, gallery, total }) => {
  return (
    gallery.length > 0 &&
    gallery.length < total && <LoadMore onClick={onClick}>{children}</LoadMore>
  );
};

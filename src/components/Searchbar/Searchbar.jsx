import { Formik } from 'formik';
import {
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
  SearchbarWrapper,
  StyledForm,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <Formik
        initialValues={{
          input: '',
        }}
        onSubmit={(value, actions) => {
          onSubmit(value);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <SearchBtn type="submit">
            <SearchBtnLabel>Search</SearchBtnLabel>
          </SearchBtn>

          <SearchInput
            name="input"
            autoComplete="off"
            type="text"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </SearchbarWrapper>
  );
};

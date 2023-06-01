import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  margin: 0 auto;

  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 10px;
  opacity: 0.6;
  border: none;
  font-size: 18px;
  font-weight: 700;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
 margin-right: 25px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;

    font-size: 24px;
  }
`;

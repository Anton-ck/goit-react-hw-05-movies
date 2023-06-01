import React from 'react';
import {
  SearchFormStyled,
  SearchFormButton,
  SearchFormInput,
} from './MovieSearch.styled';

const SearchForm = ({ handleSubmit, handleInputSubmit, query }) => {
  return (
    <SearchFormStyled onSubmit={handleSubmit}>

      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleInputSubmit}
        value={query}
      />
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchFormStyled>
  );
};

export default SearchForm;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieDetailsWrapper = styled.div`
display: flex;
margin-top: 100px;
`

export const TextInfoAboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const GenresList = styled.ul`
display: flex;
gap: 20px;
`
export const ButtonGoBack = styled(Link)`
  position: absolute;
  top: 100px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px 20px;
  min-width: 100px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  color: #fff;
  letter-spacing: 0.06em;
  background-color: #2196f3;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #188ce8;
  }
`;
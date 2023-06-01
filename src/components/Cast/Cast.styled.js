import styled from '@emotion/styled';

export const ActorsCardWrapper = styled.div`
  display: block;
`;

export const ActorsCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  list-style: none;
  /* outline: 1px solid red; */
`;

export const ActorsCardItem = styled.li`
  /* width: calc((100% - 260px) / 3);
  margin-bottom: 30px;
  margin-right: 30px;
  /* padding: 25px; */
  /* margin: 0 auto; */
  text-align: center;
  list-style: none;

  /* &:nth-child(3n) {
    margin-left: 0px;
    margin-right: 0;
  }
  &:last-child {
    width: 100%;
    margin-right: auto;
  } */
`;

export const ActorsCardImg = styled.img`
  display: block;
  margin: 0 auto;
  padding: 10px;
`;

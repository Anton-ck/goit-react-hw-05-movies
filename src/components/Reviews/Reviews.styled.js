import styled from "@emotion/styled";

export const ReviewsCardWrapper = styled.div`
  display: block;
`;
export const ReviewCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  list-style: none;
`;

export const ReviewCardItem = styled.li`
  padding: 15px;


`;

export const ReviewAuthor = styled.p`
  font-weight: 700;
  & > span {
    color: rebeccapurple;
  }
`;

export const Review = styled.p`
  font-weight: 700;
  & > span {
    font-weight: 400;
    font-style: oblique;
    line-height: 1.5;
  }
`;
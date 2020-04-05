import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewDataAccessGamesProps {}

const StyledReviewDataAccessGames = styled.div`
  color: pink;
`;

export const ReviewDataAccessGames = (props: ReviewDataAccessGamesProps) => {
  return (
    <StyledReviewDataAccessGames>
      <h1>Welcome to review-data-access-games component!</h1>
    </StyledReviewDataAccessGames>
  );
};

export default ReviewDataAccessGames;

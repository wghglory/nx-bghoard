import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewUiTileProps {}

const StyledReviewUiTile = styled.div`
  color: pink;
`;

export const ReviewUiTile = (props: ReviewUiTileProps) => {
  return (
    <StyledReviewUiTile>
      <h1>Welcome to review-ui-tile component!</h1>
    </StyledReviewUiTile>
  );
};

export default ReviewUiTile;

import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

const StyledReviewFeatureList = styled.div`
  color: pink;
`;

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  return (
    <StyledReviewFeatureList>
      <h1>Welcome to review-feature-list component!</h1>
    </StyledReviewFeatureList>
  );
};

export default ReviewFeatureList;

import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewFeatureDetailsProps {}

const StyledReviewFeatureDetails = styled.div`
  color: pink;
`;

export const ReviewFeatureDetails = (props: ReviewFeatureDetailsProps) => {
  return (
    <StyledReviewFeatureDetails>
      <h1>Welcome to review-feature-details component!</h1>
    </StyledReviewFeatureDetails>
  );
};

export default ReviewFeatureDetails;

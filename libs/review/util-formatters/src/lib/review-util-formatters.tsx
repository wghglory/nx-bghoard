import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewUtilFormattersProps {}

const StyledReviewUtilFormatters = styled.div`
  color: pink;
`;

export const ReviewUtilFormatters = (props: ReviewUtilFormattersProps) => {
  return (
    <StyledReviewUtilFormatters>
      <h1>Welcome to review-util-formatters component!</h1>
    </StyledReviewUtilFormatters>
  );
};

export default ReviewUtilFormatters;

import React from 'react';
import { render } from '@testing-library/react';

import ReviewUtilFormatters from './review-util-formatters';

describe(' ReviewUtilFormatters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUtilFormatters />);
    expect(baseElement).toBeTruthy();
  });
});

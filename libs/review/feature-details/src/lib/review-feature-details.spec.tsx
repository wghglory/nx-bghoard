import React from 'react';
import { render } from '@testing-library/react';

import ReviewFeatureDetails from './review-feature-details';

describe(' ReviewFeatureDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewFeatureDetails />);
    expect(baseElement).toBeTruthy();
  });
});

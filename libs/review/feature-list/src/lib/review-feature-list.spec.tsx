import React from 'react';
import { render } from '@testing-library/react';

import ReviewFeatureList from './review-feature-list';

describe(' ReviewFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import ReviewDataAccessGames from './review-data-access-games';

describe(' ReviewDataAccessGames', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewDataAccessGames />);
    expect(baseElement).toBeTruthy();
  });
});

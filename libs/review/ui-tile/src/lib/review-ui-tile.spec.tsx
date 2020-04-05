import React from 'react';
import { render } from '@testing-library/react';

import ReviewUiTile from './review-ui-tile';

describe(' ReviewUiTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUiTile />);
    expect(baseElement).toBeTruthy();
  });
});

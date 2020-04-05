import React from 'react';

import { ReviewFeatureList } from '@nx-bghoard/review/feature-list';

export const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>

      <ReviewFeatureList />
    </>
  );
};

export default App;

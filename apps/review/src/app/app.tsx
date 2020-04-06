import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { ReviewFeatureList } from '@nx-bghoard/review/feature-list';
import { ReviewFeatureDetails } from '@nx-bghoard/review/feature-details';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/review">
        <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
        <Route exact path="/" render={() => <ReviewFeatureList />} />
        <Route
          path="/:game"
          render={({ match }) => (
            <ReviewFeatureDetails gameId={match.params.game} />
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default App;

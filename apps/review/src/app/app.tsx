import React from 'react';

import {
  TileGrid,
  Tile,
  ImageWrapper,
  Image,
  TileTitle,
  TileLeftCorner,
  TileRightCorner
} from '@nx-bghoard/review/ui-tile';

import {
  currencyFormat,
  ratingFormat
} from '@nx-bghoard/review/util-formatters';

import { useGames } from '@nx-bghoard/review/data-access-games';

export const App = () => {
  const games = useGames();

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>
      <TileGrid>
        {games.map(game => {
          return (
            <a
              href={'/' + game.id}
              key={game.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Tile>
                {game.image && (
                  <ImageWrapper>
                    <Image src={game.image} />
                  </ImageWrapper>
                )}
                <TileTitle>{game.name}</TileTitle>
                <TileLeftCorner>{ratingFormat(game.rating)}</TileLeftCorner>
                <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
              </Tile>
            </a>
          );
        })}
      </TileGrid>
    </>
  );
};

export default App;

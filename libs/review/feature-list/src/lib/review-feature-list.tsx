import React from 'react';
import { Link } from 'react-router-dom';

// import {
//   TileGrid,
//   Tile,
//   ImageWrapper,
//   Image,
//   TileTitle,
//   TileLeftCorner,
//   TileRightCorner
// } from '@nx-bghoard/review/ui-tile';
// use web component
import '@nx-bghoard/shared/ui-tile';

import {
  currencyFormat,
  ratingFormat
} from '@nx-bghoard/shared/util-formatters';

import { useGames } from '@nx-bghoard/review/data-access-games';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();

  return (
    // <TileGrid>
    //   {games.map(game => {
    //     return (
    //       <Link
    //         to={'/' + game.id}
    //         key={game.id}
    //         style={{ textDecoration: 'none', color: 'inherit' }}
    //       >
    //         <Tile>
    //           {game.image && (
    //             <ImageWrapper>
    //               <Image src={game.image} />
    //             </ImageWrapper>
    //           )}
    //           <TileTitle>{game.name}</TileTitle>
    //           <TileLeftCorner>{ratingFormat(game.rating)}</TileLeftCorner>
    //           <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
    //         </Tile>
    //       </Link>
    //     );
    //   })}
    // </TileGrid>

    <bghoard-grid>
      {games.map(game => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <bghoard-tile>
              {game.image && (
                <bghoard-image-wrapper>
                  <img src={game.image} alt={game.name} />
                </bghoard-image-wrapper>
              )}
              <bghoard-tile-title>{game.name}</bghoard-tile-title>
              <bghoard-tile-left-corner>
                {ratingFormat(game.rating, 5)}
              </bghoard-tile-left-corner>
              <bghoard-tile-right-corner>
                {currencyFormat(game.price)}
              </bghoard-tile-right-corner>
            </bghoard-tile>
          </Link>
        );
      })}
    </bghoard-grid>
  );
};

export default ReviewFeatureList;

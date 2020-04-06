import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

import { Game } from '@nx-bghoard/api-interfaces';

@Injectable({ providedIn: 'root' })
export class GamesService {
  games$ = this.httpClient.get<Game[]>('/api/game').pipe(shareReplay());

  constructor(private httpClient: HttpClient) {}

  getGame(gameId: string) {
    return this.games$.pipe(
      map(games => games.find(game => game.id === gameId))
    );
  }
}

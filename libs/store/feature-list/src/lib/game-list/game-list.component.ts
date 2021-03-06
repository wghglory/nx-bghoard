import { Component, OnInit } from '@angular/core';
import { GamesService } from '@nx-bghoard/store/data-access-games';

// use web component
import '@nx-bghoard/shared/ui-tile';

@Component({
  selector: 'nx-bghoard-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games$ = this.gamesService.games$;
  constructor(private gamesService: GamesService) {}

  ngOnInit() {}
}

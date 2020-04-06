import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CartItem } from '@nx-bghoard/api-interfaces';
import { CartService } from '@nx-bghoard/store/data-access-cart';
import { GamesService } from '@nx-bghoard/store/data-access-games';

@Component({
  selector: 'nx-bghoard-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game$ = this.route.params.pipe(
    switchMap(({ game }) => this.gamesService.getGame(game))
  );

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  addToCart(item: CartItem) {
    this.cartService.addItemToCart(item);
  }
}

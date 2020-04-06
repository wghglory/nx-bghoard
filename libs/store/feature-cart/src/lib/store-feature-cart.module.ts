import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class StoreFeatureCartModule {}

export { CartComponent };

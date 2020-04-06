import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { StoreFeatureCartModule } from '@nx-bghoard/store/feature-cart';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreFeatureCartModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@nx-bghoard/store/feature-list').then(
              module => module.StoreFeatureListModule
            )
        },
        {
          path: '',
          loadChildren: () =>
            import('@nx-bghoard/store/feature-details').then(
              module => module.StoreFeatureDetailsModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/store'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

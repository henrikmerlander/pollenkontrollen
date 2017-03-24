import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionsComponent } from './regions/regions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionDetailComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'regions',
        component: RegionsComponent
      },
      {
        path: 'regions/:id',
        component: RegionDetailComponent
      },
      {
        path: '',
        redirectTo: 'regions',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

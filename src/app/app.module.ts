import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ForecastService } from './forecast.service';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionService } from './region.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegionDetailComponent,
    RegionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    ForecastService,
    RegionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

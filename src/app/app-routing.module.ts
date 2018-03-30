import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionMapComponent } from './region-map/region-map.component';

const routes: Routes = [
    { path: '', component: RegionsComponent },
    { path: 'regions/:id', component: RegionDetailComponent },
    { path: 'map', component: RegionMapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
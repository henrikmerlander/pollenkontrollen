import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
    { path: '', component: RegionsComponent },
    { path: 'regions/:id', component: RegionDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
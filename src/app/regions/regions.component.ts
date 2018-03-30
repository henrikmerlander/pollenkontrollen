import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from '../models/region';
import { RegionService } from '../region.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions: Observable<Region[]>;
  favouriteRegions: Region[] = [];

  constructor(private regionService: RegionService, private router: Router) { }

  ngOnInit() {
    this.regions = this.regionService.getRegions();

    this.regions.subscribe(regions => {
      regions.forEach(region => {
        if (localStorage.getItem(region.LocalizedName) == 'true') {
          this.favouriteRegions.push(region);
        }
      });
    })
  }

  onClick(region: Region) {
    this.router.navigate(['regions', region.ID]);
  }
}

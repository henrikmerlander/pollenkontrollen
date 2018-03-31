import { Component, OnInit } from '@angular/core';
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
  favouriteRegions: Observable<Region[]>;

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.regions = this.regionService.getRegions();
    this.favouriteRegions = this.regions.map(regions => regions.filter(region => {
      return localStorage.getItem(region.LocalizedName) == 'true';
    }));
  }
}

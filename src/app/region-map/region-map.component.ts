import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Region } from '../models/region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-map',
  templateUrl: './region-map.component.html',
  styleUrls: ['./region-map.component.css']
})
export class RegionMapComponent implements OnInit {

  center = {
    latitude: 62.38583179,
    longitude: 16.321998712,
    zoom: 5
  }

  regions: Observable<Region[]>;

  constructor(
    private regionService: RegionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.regions = this.regionService.getRegions();
  }

  goBack() {
    this.location.back();
  }
}

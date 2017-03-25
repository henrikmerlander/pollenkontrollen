import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions: Region[];

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().then(regions => this.regions = regions);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from '../models/region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions: Region[] = [];
  favouriteRegions: Region[] = [];

  constructor(private regionService: RegionService, private router: Router) { }

  ngOnInit() {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().then(regions => {
      regions.forEach(region => {
        if (localStorage.getItem(region.LocalizedName) == 'true') {
          this.favouriteRegions.push(region);
        }
        this.regions.push(region);
      });
    });
  }

  onClick(region: Region) {
    this.router.navigate(['/regions', region.ID]);
  }
}

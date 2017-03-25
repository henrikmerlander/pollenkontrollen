import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Region } from '../region';
import { RegionService } from '../region.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {

  region: Region;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private regionService: RegionService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.regionService.getRegion(params['id']))
      .subscribe(region => this.region = region);
  }

  goBack() {
    this.location.back();
  }  
}

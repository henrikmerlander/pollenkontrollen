import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ForecastService } from '../forecast.service';
import { RegionService } from '../region.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {

  forecast: any;
  region: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private forecastService: ForecastService,
    private regionService: RegionService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.regionService.getRegion(params['id']))
      .subscribe(region => {
        this.region = region;
        this.search(region.RssUrl);
      });
  }

  search(locationKey: string) {
    this.forecastService.getForecast(locationKey).then(res => {
      this.forecast = res;
    });
  }

  goBack() {
    this.location.back();
  }
}

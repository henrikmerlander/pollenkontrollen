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
  isFavourite: boolean = false;

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
        this.isFavourite = localStorage.getItem(this.region.LocalizedName) == 'true';
      });
  }

  search(locationKey: string) {
    this.forecastService.getForecast(locationKey).then(res => {
      res.items[0].title = res.items[0].title.replace('Senast uppmätta halter ', '');
      this.forecast = res;
    });
  }

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;

    localStorage.setItem(this.region.LocalizedName, this.isFavourite.toString());
  }

  goBack() {
    this.location.back();
  }
}

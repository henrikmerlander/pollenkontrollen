import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Region } from './region';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegionService {

  constructor(private http: Http) { }

  getRegions(): Promise<Region[]> {
    return this.http.get(environment.
      api_url +
      '/locations/v1/adminareas/' +
      environment.countryCode +
      '?apikey=' + environment.api_key +
      '&language=' + environment.language)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getRegion(id: string): Promise<Region> {
    return this.getRegions()
      .then(region => region.find(region => region.ID === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

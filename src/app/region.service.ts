import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Region } from './models/region';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegionService {

  constructor(private http: Http) { }

  getRegions(): Promise<Region[]> {
    return Promise.resolve(REGIONS);
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

const REGIONS: Region[] = [
  { ID: '1', LocalizedName: "Stockholm", LocationKey: '314929' },
  { ID: '2', LocalizedName: "Göteborg", LocationKey: '315909' },
  { ID: '3', LocalizedName: "Malmö", LocationKey: '314779' }
];

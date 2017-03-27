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
  { ID: '1', LocalizedName: "Stockholm", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d158347/12.549d670913d8d81d158351.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '2', LocalizedName: "Göteborg", RssUrl: 'http://pollenrapporten.se/4.67f7c5a013d827ecb4c349/12.67f7c5a013d827ecb4c353.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '3', LocalizedName: "Malmö", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d15827f/12.549d670913d8d81d158289.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' }
];

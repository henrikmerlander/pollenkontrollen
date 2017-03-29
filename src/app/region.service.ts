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
  { ID: '1', LocalizedName: "Boden", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d15820e/12.549d670913d8d81d158218.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '2', LocalizedName: "Borlänge", RssUrl: 'http://pollenrapporten.se/4.5dae555f13d5eaab600ff/12.314e02dd13d69872ec023.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '3', LocalizedName: "Bräkne-Hoby", RssUrl: 'http://pollenrapporten.se/4.314e02dd13d69872ec0245/12.314e02dd13d69872ec024f.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '4', LocalizedName: "Bäckefors", RssUrl: 'http://pollenrapporten.se/4.67f7c5a013d827ecb4cf5/12.67f7c5a013d827ecb4cff.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '5', LocalizedName: "Eskilstuna", RssUrl: 'http://pollenrapporten.se/4.67f7c5a013d827ecb4c155/12.67f7c5a013d827ecb4c15f.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '6', LocalizedName: "Forshaga", RssUrl: 'http://pollenrapporten.se/4.67f7c5a013d827ecb4c2c9/12.67f7c5a013d827ecb4c2d3.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '7', LocalizedName: "Gävle", RssUrl: 'http://pollenrapporten.se/4.4a349ce514c29d2b75128433/12.4a349ce514c29d2b7512843f.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '8', LocalizedName: "Göteborg", RssUrl: 'http://pollenrapporten.se/4.67f7c5a013d827ecb4c349/12.67f7c5a013d827ecb4c353.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '9', LocalizedName: "Hässleholm", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d158193/12.549d670913d8d81d15819d.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '10', LocalizedName: "Jönköping", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d1581b9/12.549d670913d8d81d1581c3.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '11', LocalizedName: "Kristianstad", RssUrl: 'http://pollenrapporten.se/4.1cb760b014a762ca80194b9b/12.1cb760b014a762ca80194ba7.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '12', LocalizedName: "Malmö", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d15827f/12.549d670913d8d81d158289.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '13', LocalizedName: "Norrköping", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d1582a3/12.549d670913d8d81d1582ad.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '14', LocalizedName: "Nässjö", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d1582f5/12.549d670913d8d81d1582ff.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '15', LocalizedName: "Skövde", RssUrl: 'http://pollenrapporten.se/4.3688e97313f58cd83202e91/12.3688e97313f58cd83203c17.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '16', LocalizedName: "Stockholm", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d158347/12.549d670913d8d81d158351.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '17', LocalizedName: "Sundsvall", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d15839f/12.549d670913d8d81d1583a9.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '18', LocalizedName: "Umeå", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d1583f6/12.549d670913d8d81d158400.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '19', LocalizedName: "Visby", RssUrl: 'http://pollenrapporten.se/4.4a349ce514c29d2b75128385/12.4a349ce514c29d2b75128391.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '20', LocalizedName: "Västervik", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d158447/12.549d670913d8d81d158451.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' },
  { ID: '21', LocalizedName: "Östersund", RssUrl: 'http://pollenrapporten.se/4.549d670913d8d81d15849a/12.549d670913d8d81d1584a4.portlet?state=rss&sv.contenttype=text/xml;charset=UTF-8' }
];

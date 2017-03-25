import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class ForecastService {

  constructor(private http: Http) { }
  
  getForecast(locationKey: string): Promise<any[]> {
    return this.http.get(
      environment.api_url +
      '/forecasts/v1/daily/1day' +
      '/' + locationKey +
      '?apikey=' + environment.api_key +
      '&details=true' +
      '&metric=true' +
      '&language=' + environment.language)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

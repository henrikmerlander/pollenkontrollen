import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class ForecastService {

  constructor(private http: Http) { }

  getForecast(url: string): Promise<any> {
    const options = new RequestOptions({
      params: {
        api_key: environment.rss_to_json.api_key,
        rss_url: url
      }
    })
    return this.http.get(environment.rss_to_json.api_url, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

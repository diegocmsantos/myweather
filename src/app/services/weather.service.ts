import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  private _http: any;
  private _apiKey: string;
  private _conditionsUrl: string;

  constructor(private http: Http) {
    this._http = http;
    this._apiKey = '56b0dd84a7bc50d0';
    this._conditionsUrl = `http://api.wunderground.com/api/${this._apiKey}/conditions/q`;
  }

  getWeather(state, city) {

    return this._http.get(`${this._conditionsUrl}/${state}/${city}.json`)
      .map(res => res.json());

  }

}
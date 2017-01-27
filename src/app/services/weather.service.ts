import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  private _http: any;
  private _apiKey: string;
  private _conditionsUrl: string;
  private _searchUrl: string;
  private _cityAPIRequest: string;

  constructor(private http: Http) {
    this._http = http;
    this._apiKey = '56b0dd84a7bc50d0';
    this._conditionsUrl = `http://api.wunderground.com/api/${this._apiKey}/conditions/q`;
    this._searchUrl = 'http://localhost:8100/search/aq?query=';
    this._cityAPIRequest = `http://www.wunderground.com/q/zmw:`;
  }

  getWeather(zmw) {

    return this._http.get(`${this._conditionsUrl}/zmw:${zmw}.json`)
      .map(res => res.json());

  }

  searchCities(searchStr) {

    return this._http.get(`${this._searchUrl}${searchStr}`)
      .map(res => res.json());

  }

  searchCity(zmw) {
    return this._http.get(`${this._cityAPIRequest}${zmw}`)
      .map(res => res.json());
  }

}
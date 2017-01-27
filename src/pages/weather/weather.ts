import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {

  private weather: any;
  private searchStr: string;
  private cities: any[];
  private zmw: any;

  constructor(public navCtrl: NavController, 
    private weatherService: WeatherService) {}

  ngOnInit() {
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => this.weather = weather.current_observation);
  }

  getDefaultCity() {
    const location = localStorage.getItem('location');
    if (location !== undefined) {
      this.zmw = JSON.parse(location).zmw;
    } else {
      this.zmw = '10001.11.99999';
    }
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(cities => this.cities = cities.RESULTS);
  }

  chooseCity(city) {
    this.cities = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(weather => this.weather = weather.current_observation);
  }

}

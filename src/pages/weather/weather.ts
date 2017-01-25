import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {

  private city: string;
  private state: string;
  private weather: any;

  constructor(public navCtrl: NavController, 
    private weatherService: WeatherService) {

    this.city = 'Boston';
    this.state = 'MA';

  }

  ngOnInit() {
    this.weatherService.getWeather(this.state, this.city)
      .subscribe(weather => {
        console.log(weather);
        this.weather = weather.current_observation;
      });
  }

}

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { IWeather, IGeoData, IForecast, IForecastList } from 'src/app/interfaces/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  {
  geoData!: Observable<IGeoData[]>
  searchKey!: string
  searchObs$!: Observable<any>
  subject = new Subject();
  weatherData!: IWeather
  forecastData!: IForecastList[];
  forecastWeek!: IForecastList[]
  DateToday = new Date().toDateString();
  userSearchUpdate = new Subject<string>();



  constructor(private weatherService: WeatherService, private datePipe: DatePipe) {

    this.userSearchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged()).subscribe((value)=>{
        this.searchValues(value)
      })
  }

  searchValues(key:string) {
    this.geoData = this.weatherService.getCities(key)
  }

   getResult(lat: number, lon: number) {
    this.geoData = new Observable<IGeoData[]>

    this.weatherService.getWeatherData(lat,lon).subscribe((val: IWeather) => {
      this.weatherData = val
      this.searchKey=this.weatherData.name
    });

    this.weatherService.getForecastData(lat, lon).subscribe((val: IForecast) => {
      this.forecastData = val.list.filter((val) => {
        let a = this.datePipe.transform(val.dt_txt, 'yyyy/MM/dd')
        let b = this.datePipe.transform(this.DateToday, 'yyyy/MM/dd')
        return a == b
      })

      this.forecastWeek = val.list.filter((val) => {
        let a = this.datePipe.transform(val.dt_txt, 'hh:mm a');
        let b = '12:00 AM'
        return a == b
      })

    })
  }

  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (position) =>{
          let lat = position.coords.latitude
          let lon = position.coords.longitude
          this.getResult(lat, lon);

          }, function errorCallback(error) {
            alert(error)
        });


  }
}

}

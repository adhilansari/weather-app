import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGeoCities, IGeoData } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  GEO_API_URL: string = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
  WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY = 'ff8557529ee2bd235b2a95913b52424c'



  getCities(input: string): Observable<IGeoData[]> {
    const url = `${this.GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`;
    return this.http.get<IGeoCities>(url, {
      headers: { 'X-RapidAPI-Key': 'baae2a645dmshd63e1ecb59958efp115628jsn1d40f7a8c26f', 'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com', }
    }).pipe(map(res => {
      return res.data
    }))
  }

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${this.WEATHER_API_KEY}&units=metric`);
  };

  getForecastData(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }



}

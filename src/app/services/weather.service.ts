import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGeoCities, IGeoData } from '../interfaces/weather.interface';
import { GEO_API_URL, WEATHER_API_KEY, WEATHER_API_URL, X_RapidAPI_Host, X_RapidAPI_Key } from '../shared/urls';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }



  getCities(input: string): Observable<IGeoData[]> {
    const url = `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`;
    return this.http.get<IGeoCities>(url, {
      headers: { 'X-RapidAPI-Key': X_RapidAPI_Key, 'X-RapidAPI-Host': X_RapidAPI_Host, }
    }).pipe(map(res => {
      return res.data
    }))
  }

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.http.get(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
  };

  getForecastData(lat: number, lon: number): Observable<any> {
    return this.http.get(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
  }



}

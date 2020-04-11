import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get('http://api.weatherstack.com/forecast?access_key=b45f96ece6edb619df468566aaf7f28c&query=' + location);
  }
}

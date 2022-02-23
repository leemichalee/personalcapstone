import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location/location.model'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

    getLocations(): Observable<any> {
      return this.http.get("https://locationsandconsultants.herokuapp.com/locations")
    }
    getLocation(id: number): Observable<any> {
      return this.http.get(`https://locationsandconsultants.herokuapp.com/locations/${id}`)
    }
}

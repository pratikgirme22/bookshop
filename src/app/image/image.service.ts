import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  configUrl = 'https://reqres.in/api/unknown';
 

  constructor(private http : HttpClient) { }

  public getList(){
      return   this.http.get(this.configUrl);
  }
}

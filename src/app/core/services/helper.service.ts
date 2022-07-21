import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor( public http :HttpClient) { }
  popup = false
  filter = false
  url = 'http://localhost:3000/data';
  getUrl = this.http.get(this.url)
}

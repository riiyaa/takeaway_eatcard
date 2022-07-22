import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor( public http :HttpClient) { }
  popup = false
  filter = false
  productUrl = 'http://localhost:3000/product';
  allergyUrl = 'http://localhost:3000/allergy'
  getUrl = this.http.get(this.productUrl);
  get_allergyUrl = this.http.get(this.allergyUrl)
}

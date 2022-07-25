import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor( public http :HttpClient) { }
  allergy_popup = false
  popup = false
  filter = false
  productUrl = 'http://192.168.1.34:7777/api/get-normal-products/1';
  allergyUrl = 'http://localhost:3000/allergy'
  getUrl = this.http.get(this.productUrl);
  get_allergyUrl = this.http.get(this.allergyUrl)
}

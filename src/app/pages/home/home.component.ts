import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../core/services/helper.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _service: HelperService) { }

  ngOnInit(): void {
  }
  store_image = 'assets/Images/store_image.jpeg';
  store_name = 'Eatcard-Iframe'
  store_location = "Europalaan, 's-Hertogenbosch, Netherlands"
  store_product_title = [
    { id:1,image:'assets/Images/store_image.jpeg',product_title:'Klein en Fijn'},
    { id:2,image:'assets/Images/store_image.jpeg',product_title:'Poké bowl'},
    { id:3,image:'assets/Images/store_image.jpeg',product_title:'Mix and match'},
    { id:4,image:'assets/Images/store_image.jpeg',product_title:'Soepen en Noedels'},
    { id:5,image:'assets/Images/store_image.jpeg',product_title:'Roerbakgerechten'},
    { id:6,image:'assets/Images/store_image.jpeg',product_title:'Visgerechten'},
    { id:7,image:'assets/Images/store_image.jpeg',product_title:'Rotisserie'},
    { id:8,image:'assets/Images/store_image.jpeg',product_title:'Lunch'},
    { id:9,image:'assets/Images/store_image.jpeg',product_title:'Bubble Tea'},
    { id:10,image:'assets/Images/store_image.jpeg',product_title:'Warme dranken'},
  ]
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: false,
    items:5
  }
  }

import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../core/services/helper.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selected_id: any
  allData:any
  category_id:any
  allAllergy:any
  constructor(public _service : HelperService) { }

  ngOnInit(): void {
    this._service.getUrl.subscribe((data:any)=>{
      this.allData = data.data.normalProducts
      console.log(this.allData)
    })
    this._service.get_allergyUrl.subscribe((data:any)=>{
      this.allAllergy = data
      // console.log(this.allAllergy)
    })
  }

  store_image = 'assets/Images/store_image.jpeg';
  store_name = 'Eatcard-Iframe'
  store_location = "Europalaan, 's-Hertogenbosch, Netherlands"
  store_product_title = [
    { id:1,image:'assets/Images/store_image.jpeg',product_title:'Klein en Fijn'},
    { id:2,image:'assets/Images/store_image.jpeg',product_title:'Poké bowl'},
    { id:3,image:'assets/Images/store_image.jpeg',product_title:'Mix and match'},
    { id:192,image:'assets/Images/store_image.jpeg',product_title:'Soepen en Noedels'},
    { id:60,image:'assets/Images/store_image.jpeg',product_title:'Roerbakgerechten'},
    { id:92,image:'assets/Images/store_image.jpeg',product_title:'Visgerechten'},
    { id:7,image:'assets/Images/store_image.jpeg',product_title:'Rotisserie'},
    { id:8,image:'assets/Images/store_image.jpeg',product_title:'Lunch'},
    { id:9,image:'assets/Images/store_image.jpeg',product_title:'Bubble Tea'},
    { id:10,image:'assets/Images/store_image.jpeg',product_title:'Warme dranken'},
  ]

  showData(data: any) {
    // console.log(data)
    console.log(data.sub_category)
    if(data.allergy){
    }
    this.selected_id = data.id
    // console.log(data.sub_category)
  }
  }

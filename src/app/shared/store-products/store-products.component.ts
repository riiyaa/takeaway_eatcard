import {Component, OnInit, ViewChild} from '@angular/core';
import {HelperService} from "../../core/services/helper.service";
import {DragScrollComponent} from "ngx-drag-scroll";

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent implements OnInit {

  constructor(public _service : HelperService) { }
  selected_id: any
  allData:any
  category_id:any
  allAllergy:any
  ngOnInit(): void {
      this._service.getUrl.subscribe((data:any)=>{
        this.allData = data
      })
      this._service.get_allergyUrl.subscribe((data:any)=>{
        this.allAllergy = data
        console.log(this.allAllergy)
      })
  }
  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds: DragScrollComponent | undefined;

  store_image = 'assets/Images/store_image.jpeg';
  store_name = 'Eatcard-Iframe'
  store_location = "Europalaan, 's-Hertogenbosch, Netherlands"
  store_product_title = [
    { id:1,image:'assets/Images/store_image.jpeg',product_title:'Klein en Fijn'},
    { id:60,image:'assets/Images/store_image.jpeg',product_title:'Poké bowl'},
    { id:910,image:'assets/Images/store_image.jpeg',product_title:'Mix and match'},
    { id:4,image:'assets/Images/store_image.jpeg',product_title:'Soepen en Noedels'},
    { id:5,image:'assets/Images/store_image.jpeg',product_title:'Roerbakgerechten'},
    { id:6,image:'assets/Images/store_image.jpeg',product_title:'Visgerechten'},
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

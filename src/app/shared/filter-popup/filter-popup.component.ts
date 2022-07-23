import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent} from "ngx-drag-scroll";
import {HelperService} from "../../core/services/helper.service";

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss']
})
export class FilterPopupComponent implements OnInit {

  constructor(public _helper:HelperService) { }
  showContent:any
  allAllergy:any

  @ViewChild('filters', {read: DragScrollComponent, static: true}) ds: DragScrollComponent | undefined;

  ngOnInit(): void {
    this._helper.get_allergyUrl.subscribe((data:any)=>{
      this.allAllergy = data
      console.log(this.allAllergy)
    })
    this.showContent = 0
  }

  moveTo(index:any) {
    // this.ds?.moveTo(index);
    this.showContent = index
  }

  show(value: string) {
    console.log(value)
  }
}

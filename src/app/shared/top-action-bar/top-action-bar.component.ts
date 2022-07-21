import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../core/services/helper.service";

@Component({
  selector: 'app-top-action-bar',
  templateUrl: './top-action-bar.component.html',
  styleUrls: ['./top-action-bar.component.scss']
})
export class TopActionBarComponent implements OnInit {
  constructor(public _service:HelperService) { }

  ngOnInit(): void {
  }

  store_name: any = "Europalaan, 's-Hertogenbosch";

}

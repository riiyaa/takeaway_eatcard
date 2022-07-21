import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DutchPricePipe} from "./dutchPrice.pipe";



@NgModule({
  declarations: [
    DutchPricePipe
  ],
  exports: [
    DutchPricePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

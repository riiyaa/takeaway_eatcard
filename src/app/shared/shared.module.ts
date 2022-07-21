import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopActionBarComponent } from './top-action-bar/top-action-bar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import { StoreProductsComponent } from './store-products/store-products.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import {DragScrollModule} from "ngx-drag-scroll";
import {PipesModule} from "../core/pipes/pipes.module";



@NgModule({
    declarations: [
        TopActionBarComponent,
        StoreProductsComponent,
        OrderProductsComponent
    ],
  exports: [
    TopActionBarComponent,
    StoreProductsComponent,
    OrderProductsComponent
  ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        DragScrollModule,
        PipesModule,
    ]
})
export class SharedModule { }

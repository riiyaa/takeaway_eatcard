import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {DragScrollModule} from "ngx-drag-scroll";
import {PipesModule} from "../core/pipes/pipes.module";
import { CheckoutComponent } from './checkout/checkout.component';

const routes:Routes = [
  {path:'',component:PagesComponent,children:[
      {path:'',component:HomeComponent},
      {path:'checkout',component:CheckoutComponent}
    ]}
]

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CheckoutComponent,
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        DragScrollModule,
        PipesModule,
    ],
  providers:[DatePipe]
})
export class PagesModule { }

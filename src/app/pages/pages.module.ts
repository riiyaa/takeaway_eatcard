import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {CarouselModule} from "ngx-owl-carousel-o";

const routes:Routes = [
  {path:'',component:PagesComponent,children:[
      {path:'',component:HomeComponent},
    ]}
]

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CarouselModule,
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }

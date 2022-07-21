import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopActionBarComponent } from './top-action-bar/top-action-bar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        TopActionBarComponent
    ],
    exports: [
        TopActionBarComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
  ]
})
export class SharedModule { }

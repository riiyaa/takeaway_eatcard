import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopActionBarComponent } from './top-action-bar/top-action-bar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {DragScrollModule} from "ngx-drag-scroll";
import {PipesModule} from "../core/pipes/pipes.module";
import { FilterPopupComponent } from './filter-popup/filter-popup.component';



@NgModule({
    declarations: [
        TopActionBarComponent,
        FilterPopupComponent
    ],
    exports: [
        TopActionBarComponent,
        FilterPopupComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ScrollviewCardComponent } from './scrollview-card/scrollview-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { FormsModule } from '@angular/forms';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {  ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ InventoryComponent, AddItemComponent, ScrollviewCardComponent],
  imports: [
    CommonModule,
    ScrollViewModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    WindowModule,
    ButtonsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

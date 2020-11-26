import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { InventoryComponent } from './home/inventory/inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    ScrollViewModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    CommonModule,
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

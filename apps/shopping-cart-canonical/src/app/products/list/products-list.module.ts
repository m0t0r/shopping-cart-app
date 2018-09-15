import { NgModule } from '@angular/core';
import * as fromContainers  from './containers';
import * as fromComponents from './components';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    fromComponents.MainProductModule,
    ProductsListRoutingModule
  ],
  exports: [fromContainers.containers],
  declarations: [fromContainers.containers]
})
export class ProductsListModule { }

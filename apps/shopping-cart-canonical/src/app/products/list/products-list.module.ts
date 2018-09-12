import { NgModule } from '@angular/core';
import * as fromContainers  from './containers';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  imports: [ProductsListRoutingModule],
  exports: [fromContainers.containers],
  declarations: [fromContainers.containers]
})
export class ProductsListModule { }

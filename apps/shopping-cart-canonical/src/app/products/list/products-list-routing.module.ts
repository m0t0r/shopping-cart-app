import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './containers';

export const routes: Routes = [
  {
    path: ':category',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule { }

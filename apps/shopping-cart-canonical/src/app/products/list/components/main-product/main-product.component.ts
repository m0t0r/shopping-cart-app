import { Component, Input, NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../../app-material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sc-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss']
})
export class MainProductComponent {
  @Input() product: any;
}

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  exports: [MainProductComponent],
  declarations: [MainProductComponent]
})
export class MainProductModule { }

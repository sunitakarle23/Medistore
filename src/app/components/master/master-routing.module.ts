import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ColorComponent } from './color/color.component';
import { TagComponent } from './tag/tag.component';
import { SizeComponent } from './size/size.component';
import { BrandlogoComponent } from './brandlogo/brandlogo.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { PartyComponent } from '../party/party.component';
import { ProductListComponent } from '../products/physical/product-list/product-list.component';
import { AddProductComponent } from '../products/physical/add-product/add-product.component';
import { TransportsComponent } from '../transports/transports.component';
import { HsnComponent } from '../hsn/hsn.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'supplier', component: PartyComponent },
      { path: 'customer', component: PartyComponent },
      {
        path: 'products', children: [
          { path: 'add-products', component: AddProductComponent },
          { path: 'product-list', component: ProductListComponent }
        ]
      },
      { path: 'transports', component: TransportsComponent },
      { path: 'hsn', component: HsnComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

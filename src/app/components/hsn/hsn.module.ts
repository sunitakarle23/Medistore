import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsnRoutingModule } from './hsn-routing.module';
import { HsnComponent } from './hsn.component';


@NgModule({
  declarations: [HsnComponent],
  imports: [
    CommonModule,
    HsnRoutingModule
  ]
})
export class HsnModule { }

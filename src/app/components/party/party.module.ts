import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './party.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';


@NgModule({
  declarations: [PartyComponent, BankDetailsComponent],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }

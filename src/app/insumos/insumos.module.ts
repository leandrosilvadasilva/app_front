import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { InsumosRoutingModule } from './insumos-routing.module';
import { InsumosComponent } from './insumos/insumos.component';



@NgModule({
  declarations: [
    InsumosComponent
  ],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class InsumosModule { }

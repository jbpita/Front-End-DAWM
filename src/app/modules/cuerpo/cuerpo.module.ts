import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuerpoRoutingModule } from './cuerpo-routing.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CuerpoComponent
  ],
  imports: [
    CommonModule,
    CuerpoRoutingModule,
    SharedModule
  ]
})
export class CuerpoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FormComponent } from './components/form/form.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';


@NgModule({
  declarations: [
    FormComponent,
    ContactanosComponent,
    LocalizacionComponent

  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactanosModule { 
 
}

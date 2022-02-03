import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

const routes: Routes = [
  {path:'', component:ContactanosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactanosRoutingModule { }

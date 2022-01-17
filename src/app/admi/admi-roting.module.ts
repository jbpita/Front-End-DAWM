import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmiConsoleComponent } from './admi-console/admi-console.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { StadisticComponent } from './stadistic/stadistic.component';
import { FormMarcaComponent } from './form-marca/form-marca.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: '' , component: AdmiConsoleComponent, children: [
        {path: 'form-product', component:  FormProductoComponent},
        {path: 'form-marca', component:  FormMarcaComponent},
        {path: 'stadistic' , component: StadisticComponent},
        {path: 'user' , component: UserComponent}
      ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdmiRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './modules/cuerpo/cuerpo/cuerpo.component';


const routes: Routes = [
  {
    path:'',
    component:CuerpoComponent,
    loadChildren:() => import('./modules/cuerpo/cuerpo.module').then(m => m.CuerpoModule)
  },
  {
    path:'InicioSesion',
      loadChildren:() => import('./modules/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

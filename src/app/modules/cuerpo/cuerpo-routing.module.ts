import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('../inicio/inicio.module').then( m => m.InicioModule)
  },
  {
    path:'Catalogo',
    loadChildren:() => import('../catalogo/catalogo.module').then( m => m.CatalogoModule)
  },
  {
    path:'Nosotros',
      loadChildren:() => import('../nosotros/nosotros.module').then( m => m.NosotrosModule) 
  },
  {
    path:'Contactanos',
      loadChildren:() => import('../contactanos/contactanos.module').then( m => m.ContactanosModule) 
  }
  ,
  {
    path:'Carrito',
    loadChildren:() => import('../carrito/carrito.module').then( m => m.CarritoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuerpoRoutingModule { }

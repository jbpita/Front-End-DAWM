import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  

  constructor() { }
  informationCarousel= [{
    name: 'First slide',
    srci: './assets/img/slideBar/slide_PC01.jpg',
    h3i: 'Encuentra tu mejor Batería',
    h1i:'Tenemos los mejores precios del mercado',
    pi: '',
    activei:"active"
  },
  {
    name: 'Second slide',
    srci: './assets/img/slideBar/slide_PC02.jpg',
    h3i: 'Sin duda, esta es la mejor compra que hará',
    h1i:'Muchas personas han comprado',
    pi: '',
    activei:""
  }
  ,
  {
    name: 'Third slide',
    srci: './assets/img/slideBar/slide_PC03.jpg',
    h3i: 'Tenemos Las Mejores Opciones',
    h1i:'Encuentra tu mejor Bateria',
    pi: '',
    activei:""
  }]
  ngOnInit(): void {
  }

}

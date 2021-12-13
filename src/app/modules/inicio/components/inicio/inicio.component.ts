import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  informationCarousel= [{
    name: 'First slide',
    srci: 'https://img.interempresas.net/fotos/2134642.jpeg',
    h3i: 'Servicio Express',
    h1i:'Tu bateria en donde estes',
    pi: 'Elige tu marca favorita, envianós tu información y dejanós el resto a nosotros',
    activei:"active"
  },
  {
    name: 'Second slide',
    srci: 'https://cdn-3.expansion.mx/5a/17/19010fbd407890b262a60f3dfe28/2017-11-17t000000z-125783463-rc18820235a0-rtrmadp-3-batteries-recycling-1.jpg',
    h3i: 'Baterias de la mejor calidad',
    h1i:'Las mejores marcas del mercado',
    pi: 'Contamos con productos nacionales e internacionales a la orden del cliente',
    activei:""
  }
  ,
  {
    name: 'Third slide',
    srci: 'https://www.diariomotor.com/tecmovia/imagenes/2016/04/Bater%C3%ADa-080313-00.jpg',
    h3i: 'Bateria a buen precio',
    h1i:'Precios de importación',
    pi: 'Solo elige la que mejor se ajuste a tu necesidad',
    activei:""
  }]


  ngOnInit(): void {

  }

}

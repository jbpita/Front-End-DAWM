import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.css']
})
export class InsigniasComponent implements OnInit {

  insignias:{
    valor:Array<any>
  }= {valor: []}

  constructor() { }

  ngOnInit(): void {
    this.insignias.valor=[
      {
        name:"1",
        srci:"./assets/img/services/equipo.png",
        h3i:"Mejor Equipo",
        pi:"Contamos con un equipo de técnicos especializados listos para ayudarte."
      },{
        name:2,
        srci:"./assets/img/services/ecopago.png",
        h3i:"ECOPAGO",
        pi:"Aceptamos tu batería usada como parte de pago, la batería es devuelta a la fábrica para reciclarla."
      },{
        name:"3",
        srci:"./assets/img/services/garantia.png",
        h3i:"Garantía",
        pi:"Toda compra incluye garantía de 1 año o 30 mil Kilómetros, dependiendo de la batería."
      },{
        name:"4",
        srci:"./assets/img/services/marcas.png",
        h3i:'MEJORES MARCAS',
        pi:"Las mejores marcas de baterías del mercado, nacionales e importadas."
      }
    ]
  }

}

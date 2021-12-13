import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo:{
    valor:Array<any>
  }= {valor: []}


  constructor() { }

  ngOnInit(): void {
    this.equipo.valor=[{
      srcE:"./assets/img/team-1.jpg",
      h2E:"Jean Moreano",
      pE:"Ingeniero",
      facebook:"https://www.facebook.com/jeanca.moreano",
      ig:"https://instagram.com/jeancamoreano1?utm_medium=copy_link"
    },{
      srcE:"./assets/img/team-2.jpg",
      h2E:"Tatiana Yépez",
      pE:"Ingeniera",
      facebook:"https://www.facebook.com/tati.yepez.vera",
      ig:"https://instagram.com/tatiyepez18?utm_medium=copy_link"
    },{
      srcE:"./assets/img/team-3.jpeg",
      h2E:"Adriel Robles",
      pE:"Ingeniero",
      facebook:"https://www.facebook.com/adriel.robles.16",
      ig:"https://instagram.com/adrielrobles85?utm_medium=copy_link"

    },{
      srcE:"./assets/img/team-4.jpg",
      h2E:"Jorge Pita",
      pE:"Ingeniero",
      facebook:"https://www.facebook.com/jorge.pitaestrella",
      ig:"https://instagram.com/jorge.pitaestrella?utm_medium=copy_link"

    }]
  }

}

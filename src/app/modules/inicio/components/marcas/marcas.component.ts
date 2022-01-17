import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas:{
    valor:Array<any>
  }= {valor: []}

  constructor() { }

  ngOnInit(): void {
    this.marcas.valor=[
      {
        srcM:"https://www.boschecuador.com/productos_gallery/img/f29515d5b49f7851fef86e63b2d27e6c.jpg",
        h3M:"BOSCH",
        pM:"Ofrece S3, S4, S5 y S6, estás 4 líneas de productos a medida para diferentes necesidades y tipos de vehículos"
      },{
        srcM:"https://static.frecuento.com//medias/40367188-02-BASEIMAGE-Midres?context=bWFzdGVyfGZyZWN1ZW50b3w2MjYzNDB8aW1hZ2UvanBlZ3xmcmVjdWVudG8vaGIwL2g2MC85MTAzOTExNjE2NTQyLmpwZ3wyMmNkYmQ1MTc5OTZiNDEyMzA4NGY1NzFjOGZhMTMwZTA1NjM4Mjk5YzU5N2YwOWQ4MDVmYmMyZTUwMWNlMTY2",
        h3M:"DACAR",
        pM:"Tecnologías de punta, actuales en el ámbito de las baterías, con lo que se producen mayores cantidades de energía"
      },{
        srcM:"https://napaecuador.com/wp-content/uploads/MAC78950-2.jpg",
        h3M:"MAC",
        pM:" Es confiable, duradera y poderosa, asegurando un mejor desempeño para soportar las altas demandas eléctricas"
      }
    ]
  }

}

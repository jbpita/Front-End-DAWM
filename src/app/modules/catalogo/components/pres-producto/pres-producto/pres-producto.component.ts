import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product-model';

@Component({
  selector: 'app-pres-producto',
  templateUrl: './pres-producto.component.html',
  styleUrls: ['./pres-producto.component.css']
})
export class PresProductoComponent implements OnInit {
  //productos!: Product[]
  @Output() addToCartClick = new EventEmitter<Product>();

  productos: Product[]= [
    {
      id: 1,
      nombre: "Bosch S3 30H FE",
      tipo: 1,
      precio: 130.00,
      detalle: ["12 Voltios / 15 Placas / 82 Ah", "CCA(-18ºC) : 630 A Cap.Reserva: 182 min", "Largo 33.8 cm – Ancho 16.2 cm – Alto 24.1 cm"],
      src: "",
      cantidad: 5,
      qty:0,
  },
  {
    id: 2,
    nombre: "Bosch S3 30H FE",
    tipo: 1,
    precio: 130.00,
    detalle: ["12 Voltios / 15 Placas / 82 Ah", "CCA(-18ºC) : 630 A Cap.Reserva: 182 min", "Largo 33.8 cm – Ancho 16.2 cm – Alto 24.1 cm"],
    src: "./assets/img/tiposBaterias/Bosch/BoschS330HFE.jpg",
    cantidad: 0,
    qty:0
  },
  {
    id: 3,
    nombre: "Bosch S3 30H FE",
    tipo: 1,
    precio: 130.00,
    detalle: ["12 Voltios / 15 Placas / 82 Ah", "CCA(-18ºC) : 630 A Cap.Reserva: 182 min", "Largo 33.8 cm – Ancho 16.2 cm – Alto 24.1 cm"],
    src: "./assets/img/tiposBaterias/Bosch/BoschS330HFE.jpg",
    cantidad: 2,
    qty:0
  }
  ]

  constructor() { }

  ngOnInit(): void {
    //cargarProductos()
  }


  onClick(producto:Product): void {
    this.addToCartClick.emit(producto);
  }
  /*
  private cargarProductos(){
    this.productServices.getProducts()
    .pipe(
      tap((productos: productos[]) => this.productos = productos))
    .subscribe()
  }*/

}

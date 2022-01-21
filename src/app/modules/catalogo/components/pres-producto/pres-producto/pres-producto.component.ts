import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product-model';
import { CatalogosProductosService } from '../../../services/catalogos-productos.service';

@Component({
  selector: 'app-pres-producto',
  templateUrl: './pres-producto.component.html',
  styleUrls: ['./pres-producto.component.css']
})
export class PresProductoComponent implements OnInit {
  //productos!: Product[]
  @Output() addToCartClick = new EventEmitter<Product>();

  productos: Product[]= []

  constructor(private productServices:CatalogosProductosService) { }

  ngOnInit(): void {
    this.cargarProductos()
  }


  onClick(producto:Product): void {
    this.addToCartClick.emit(producto);
  }
  
  private cargarProductos(){
    this.productServices.getProducts()
    .pipe(
      tap((productos: Product[]) => {
        productos.forEach((prod)=>{
          prod.qty = 0
          prod.detalles = prod.detalle.split("|")
        })
        this.productos = productos
      }))
    .subscribe()
  }

}

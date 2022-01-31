import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product-model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  id_marca:number = 0
  productV!: Product[]  

  constructor(private shoppingCartSvc:ShoppingCartService) { }
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
  buscadormarca(id_marca:number):void{
    this.id_marca = id_marca
  }
  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

}

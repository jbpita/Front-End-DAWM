import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product-model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: Product[] = [];
  total$ = this.shoppingCartSvc.totalAction$;
  
  constructor(private shoppingCartSvc: ShoppingCartService,) { }

  ngOnInit(): void {
    this.getDataCart();
  }

   counter(i: number) {
    return new Array(i);
}

  private getDataCart(): void {
    this.shoppingCartSvc.cartAction$
      .pipe(
        tap((products: Product[]) => this.cart = products)
      )
      .subscribe()
  }

  removerProducto(product:Product){
    this.shoppingCartSvc.removeCart(product);
  }

  onChange(centroId:any, product:Product) {
    this.shoppingCartSvc.updateProduct(product,parseInt(centroId.target.value) );
  }
  

}

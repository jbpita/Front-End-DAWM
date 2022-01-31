import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);


  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }
  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }
  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }


  updateCart(product: Product): void {
    let cone:boolean = this.addToCart(product);
    if(cone){
      console.log("entra para sumar")
      this.quantityProducts();
      this.calcTotal();
    }
    
  }
  
  updateProduct(product: Product, qty: number): void {
    let cone:boolean = this.updatetoProduct(product,qty);
    if(cone){
      this.quantityProducts();
      this.calcTotal();
    }
  }
  
  removeCart(product: Product): void {
    let cone:boolean = this.removetoProduct(product);
    if(cone){
      this.quantityProducts();
      this.calcTotal();
    }
  }

  private updatetoProduct(product: Product, qty: number): boolean {
    let isProductInCart = this.products.find(({ id }) => id === product.id)
    if (isProductInCart) {
      isProductInCart.qty = qty;
    }
    return true;
}

  private removetoProduct(product: Product): boolean {
    let i = this.products.findIndex(({ id }) => id === product.id)
    this.products.splice( i, 1 );
    return true;
}

  private addToCart(product: Product): boolean {
    let isProductInCart = this.products.find(({ id }) => id === product.id)
    
    if (isProductInCart) {
      if(isProductInCart!.qty<product.cantidad){
        console.log("suma en objeto")
        isProductInCart.qty += 1;
      }
      else{
        alert("Ya agrego el limite establecido del producto")
        return false;
      }
    } else {
      this.products.push({ ...product, qty: 1 })
    }
    this.cartSubject.next(this.products);
    return true;
  }

  private quantityProducts(): void {
    const quantity = this.products.reduce((acc, prod) => acc += prod.qty, 0);
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.products.reduce((acc, prod) => acc += (prod.precio * prod.qty), 0);
    this.totalSubject.next(total);
  }
  

  constructor() { }
}

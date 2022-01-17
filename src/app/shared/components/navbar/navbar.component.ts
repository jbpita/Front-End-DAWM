import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart-service.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenu: {
    option: Array<any>
  } = { option: [] }
  
  quantity!: number;

  constructor(private router: Router, private shoppingCartSvc: ShoppingCartService) { }
  ngOnInit(): void {
    
    this.mainMenu.option = [
      {
        name: 'Inicio',
        router: ['/', ]
      },
      {
        name: 'Catalogo',
        router: ['/', 'Catalogo']
      },
      {
        name: 'Nosotros',
        router: ['/', 'Nosotros'],
      },
      {
        name: 'Contactanos',
        router: ['/', 'Contactanos'],
      }
    ]
    this.getDataCart()
  }

  irdireccion(direccion:string){
    this.router.navigate([direccion])
  }
  
  private getDataCart(): void {
    this.shoppingCartSvc.quantityAction$
      .pipe(
        tap((qty:number) => {this.quantity = qty})
      )
      .subscribe()
  }

}

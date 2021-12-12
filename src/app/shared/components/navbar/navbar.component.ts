import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenu: {
    option: Array<any>
  } = { option: [] }

  constructor(private router: Router) { }
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

  }
  irdireccion(direccion:string){
    this.router.navigate([direccion])
  }

}

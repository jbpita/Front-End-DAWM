import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, switchMap, tap } from 'rxjs/operators';
import { Compra } from 'src/app/core/models/compra-model';
import { DetalleCompra } from 'src/app/core/models/detalleCompra-model';
import { MetodoPago } from 'src/app/core/models/metodoPago-model';
import { Product } from 'src/app/core/models/product-model';
import { AuthService } from 'src/app/modules/inicio-sesion/services/auth.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart-service.service';
import Swal from 'sweetalert2';
import { CompraProductosService } from '../../servicies/compra-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: Product[] = [];
  total$ = this.shoppingCartSvc.totalAction$;
  cond!: boolean;
  pagoForm: FormGroup = new FormGroup({});
  formulario_tarjeta:boolean = true;
  total_compra:number 
  id_cliente: number;
  correo: string;
  constructor(private shoppingCartSvc: ShoppingCartService,private router: Router,private modal:NgbModal,public authSvc:AuthService,public compraPSvc:CompraProductosService) { }

  ngOnInit(): void {
    this.getDataCart();
    this.getTotal();
    this.getidCliente();
    this.getCorreo();
    
    this.pagoForm = new FormGroup(
      {
        num_tarjeta: new FormControl('', [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)        
        ]),
        cvv: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3),
          Validators.maxLength(3)
          ]),
        tiempo_expiracion: new FormControl('',
          [
            Validators.required,
            Validators.pattern('^(((0[123456789]|10|11|12)/(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))$')
          ])
      }
    )
  }
   counter(i: number) {
    return new Array(i);
}

  private getCorreo():void{
    this.authSvc.correo
    .pipe(
      tap((correo: string)=> this.correo = correo)
    )
    .subscribe();
  }

  private getDataCart(): void {
    this.shoppingCartSvc.cartAction$
      .pipe(
        tap((products: Product[]) => this.cart = products)
      )
      .subscribe();
  }

  
  private getTotal():void{
    this.shoppingCartSvc.totalAction$
    .pipe(
      tap((total: number) => {
        console.log(total)
        this.total_compra = total})
    )
    .subscribe();
  }
  private getidCliente():void{
    this.authSvc.idUser
    .pipe(
      tap((id: number) => this.id_cliente = id)
    )
    .subscribe()
  }
  removerProducto(product:Product){
    this.shoppingCartSvc.removeCart(product);
  }

  onChange(centroId:any, product:Product) {
    this.shoppingCartSvc.updateProduct(product,parseInt(centroId.target.value) );
  }
  irdireccion(){
    this.router.navigate(["/Catalogo"])
  }
  //metodo para abrir la ventana emergente cuando el cliente esta logeado para realizar la compra
  openCentrado(contenido:any,contenido2:any){
    let vala:any 
    this.authSvc.isLogged.pipe(
      tap((qty:boolean) => {
        this.cond = qty;
        vala = qty
      })
    ).subscribe()
    if(this.cond){
      this.modal.open(contenido2,{centered:true});
    }
    else{
      this.modal.open(contenido,{centered:true});
    }
  }
  presentar(validor:boolean){
      this.formulario_tarjeta = validor
      
  }
  //Metodo para realizar compra en el carrito cuando presione el boton compra
  confirmarcompra(modal:any){
    let metodoP:MetodoPago
    if(this.formulario_tarjeta){
      const {num_tarjeta,cvv,tiempo_expiracion} = this.pagoForm.value;
      metodoP = {
        id_metodo: 0,
        tipo_pago: "Tarjeta",
        cvv: cvv,
        num_tarjeta:  num_tarjeta,
        tiempo_expiracion: new Date(tiempo_expiracion.split('/')[1],tiempo_expiracion.split('/')[0],1, 0, 0, 0),
      }
      this.compraPSvc.crearMetodoPago(metodoP).pipe(
        tap((res) => console.log(res)),
        switchMap( (metodo) =>{
          let compra:Compra ={
            id_compra: 0,
            fecha_compra: new Date(Date.now()),
            total: this.total_compra,
            id_cliente: this.id_cliente,
            id_metodo: metodo.id_metodo,
          }
          this.compraPSvc.crearCompra(compra).pipe(  
            tap((res) => console.log(res)),
            switchMap((compra) => {
              let detalleCompra : DetalleCompra
            this.cart.forEach((product:Product) => {
        detalleCompra = {
        cantidad:product.qty,
        total: product.qty * product.precio,
          id_compra: compra.id_compra,
        id_producto:product.id_producto,
        }
        this.compraPSvc.crearDetalleC(detalleCompra).pipe(
          tap( res => console.log(res))
        ).subscribe();
      })
              return this.total$
            })
          )
          .subscribe();
                   return this.total$
        })
      ).subscribe();
    }
    else{metodoP = {
      id_metodo: 0,
      tipo_pago: "Efectivo",
      cvv: null,
      num_tarjeta:  null,
      tiempo_expiracion: null,
    }
    this.compraPSvc.crearMetodoPago(metodoP).pipe(
      tap((res) => console.log(res)),
      switchMap( (metodo) =>{
        let compra:Compra ={
          id_compra: 0,
          fecha_compra: new Date(Date.now()),
          total: this.total_compra,
          id_cliente: this.id_cliente,
          id_metodo: metodo.id_metodo,
        }
        this.compraPSvc.crearCompra(compra).pipe(  
          tap((res) => console.log(res)),
          switchMap((compra) => {
            let detalleCompra : DetalleCompra
          this.cart.forEach((product:Product) => {
      detalleCompra = {
      cantidad:product.qty,
      total: product.qty * product.precio,
        id_compra: compra.id_compra,
      id_producto:product.id_producto,
      }
      this.compraPSvc.crearDetalleC(detalleCompra).pipe(
        tap( res => console.log(res))
      ).subscribe();
    })
            return this.total$
          })
        )
        .subscribe();
                 return this.total$
      })
    ).subscribe();}
    this.actualizarStock();
    this.enviarCorreo();
    modal.close();
  


  }

  private enviarCorreo(){
    this.compraPSvc.enviarCorreo(this.correo).pipe(
      
      tap((res) => console.log(res,  Swal.fire({
        icon: 'success',
        title: 'Compra Realizada!!',
        text: 'Puede Puede acercarse a nuestros locales para realizar el respectivo pago y retiras su producto o contactarnos para llevar su pedido a domicilio. a nuestros locales '
        }).then((result) => {
                    if (result) {
                               location.reload();
                  }
       }) 
 ))
    ).subscribe()
  }

  private actualizarStock(){
    console.log("actualizacion de productos:", this.cart)
   this.cart.forEach((producto:Product) => {
     let qty : number = producto.stock-producto.qty
     this.compraPSvc.updateStock(producto.id_producto,qty).pipe(
      tap( res => console.log(res))
    )
    .subscribe()
   })
  }
}

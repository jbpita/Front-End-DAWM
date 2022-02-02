import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { FormBuilder , FormGroup , Validators, FormControl} from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { ProductosService } from '../services/productos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product , ResponceUpdate } from '../producto.model';
import { Marca } from 'src/app/core/models/marcas-model';
import { tap , catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  //@Output deleteProduct = new EventEmitter<number>();
  marcas: Marca[] = [];
  productos: Product[] = [];
  Seleccionado: number;

/*nombre: string;
  detalle: string;
  precio: number;
  stock: number;*/
  id_producto: number;
  
  updateProduct : FormGroup = new FormGroup({});

  constructor(
    private marcasService: MarcasService,
    private productosService: ProductosService,
    public modal: NgbModal,
    //private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cargarMarcas();
    
  }

  cargarMarcas(){
    this.marcasService.getMarcas()
    .pipe(
      tap((marcas: Marca[]) => {
        this.marcas = marcas
        console.log(this.marcas)
      })
    )
    .subscribe()
  }

  onChange(){
    this.cargarproductos();
  }

  cargarproductos(){
    this.productosService.getProductos(this.Seleccionado)
    .pipe(
      tap((productos: Product[]) => {
        this.productos = productos;
        console.log(this.productos)
      })
    )
    .subscribe()
  }

  Delete(id_producto : number){
    console.log(id_producto);
    this.productosService.deleteProducto(id_producto)
    .pipe(
      tap((mensaje: string) => {
        console.log("Menssage: " ,  mensaje);
      })
    ).subscribe()
  }

  Update(){
    console.log(this.updateProduct.value);
    const {nombre , detalle, precio, stock} = this.updateProduct.value
    if(nombre != undefined || detalle != undefined && precio != undefined && stock != undefined){
      if(nombre != null || detalle != null && precio != null && stock != null){

        this.productosService.update({
          id_producto: this.id_producto,
          nombre: nombre,
          precio: precio,
          detalle: detalle,
          stock: stock,
          src: "",
          id_marca: this.Seleccionado
        })
        .pipe(
          tap((producto : ResponceUpdate) => {
            console.log(producto);
          })
        )
        .subscribe()         

      }
    }
    /*if(this.nombre != undefined || this.detalle != undefined && this.precio != undefined && this.stock != undefined){
      if(this.nombre != null || this.detalle != null && this.precio != null && this.stock != null){
        console.log(JSON.stringify(this.updateProduct));
        console.log("nombre  : " , this.nombre);
        console.log("detalle : " , this.detalle);
        console.log("precio  : " , this.precio); 
        console.log("stock   : " , this.stock);
        this.productosService.update({
          id_producto: this.id_producto,
          nombre: this.nombre,
          precio: this.precio,
          detalle: this.detalle,
          stock: this.stock,
          src: "",
          id_marca: this.Seleccionado
        })
        .pipe(
          tap((producto : ResponceUpdate) => {
            console.log(producto);
          })
        )
        .subscribe()
      }
    }else{
      console.log("No s pudo enviar datos al servidor"); 
      console.log("nombre  : " , this.nombre);
      console.log("detalle : " , this.detalle);
      console.log("precio  : " , this.precio); 
      console.log("stock   : " , this.stock);
      console.log("id      : " , this.id_producto);
   }*/
  }

  setIdPrecio(id : number){
    this.id_producto = id;
  }

  openModal(contenido:any , id:number){
    this.id_producto = id;
    this.updateProduct = new FormGroup({
      nombre : new FormControl('' , [Validators.required]),
      detalle : new FormControl('' , [Validators.required]),
      precio : new FormControl(0 , [Validators.required]),
      stock : new FormControl(0 , [Validators.required])
    })
    this.modal.open(contenido);

    /*this.updateProduct = this.formBuilder.group({
      nombre : ['' , Validators.required],
      detalle : ['' , Validators.required],
      precio : [0 , Validators.required],
      stock : [0 , Validators.required]
    });*/

  }

}

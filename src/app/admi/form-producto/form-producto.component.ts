import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from 'src/app/core/models/marcas-model';
import { tap } from 'rxjs/operators';
import { productoRegistro } from './producto-Registro';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  
  registerProduct: FormGroup;
  //producto : productoRegistro;

  //checkoutForm = this.formBuilder.group();

  marcas: Marca[] = [];
  //nombre: string;
  //detalle: string;
  //precio: number;
  Seleccionado: number ;//i_marca

  images :any;
  ruta ='/assets/img/noimage.png'
  imgURL = this.ruta;
  multipleImages = [];
  archivo: any = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService,
    private productoSvc:ProductosService
  ) {
     
  }

  ngOnInit(): void {
    this.cargarMarcas();
    this.registerProduct = this.formBuilder.group({
      nombre : ['' , Validators.required],
      detalle : ['' , Validators.required],
      id_marca : [0 , Validators.required],
      precio : [0 , Validators.required],
      src : [''],
      stock : [0 , Validators.required]
    });
  }

  get f() {
    return this.registerProduct.controls;
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
    console.log("nombre:");
  }

  onSubmit(){
    const {nombre,detalle,id_marca,precio,src,stock}=this.registerProduct.value
    console.log(this.registerProduct.value)
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('file', this.images);
    formData.append('detalle',detalle);
    formData.append('id_marca', id_marca);
    formData.append('precio', precio);
    formData.append('src', src);
    formData.append('stock', stock);
    console.log(formData)
    this.productoSvc.postProducts(formData)
    .pipe(
      tap((res) => console.log(res)))
    .subscribe()    
  }
selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)

      const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = (event: any)=>{
         this.imgURL = event.target.result;
       }
      this.images = file;
    }
  }

}
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from 'src/app/core/models/marcas-model';
import { tap } from 'rxjs/operators';
import { productoRegistro } from './producto-Registro';

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

  archivo: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService
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
    console.warn(JSON.stringify(this.registerProduct.value));
    
  }

  capturaFile(event): any{
    let archivoCapturado = event.target.files[0];
    this.archivo.push(archivoCapturado);

    console.log(event);
  }
}
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { ResponceUpdate } from '../producto.model';
import { tap , catchError } from 'rxjs/operators';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {

  registerMarca: FormGroup;

  images :any;
  ruta ='/assets/img/noimage.png'
  imgURL = this.ruta;
  multipleImages = [];
  archivo: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService,
  ) { }

  ngOnInit(): void {
    this.registerMarca = this.formBuilder.group({
      nombre : ['' , Validators.required],
      detalle : ['' , Validators.required],
      src : [''],
    });
  }

  onSubmit(){
      const {nombre,detalle,src}=this.registerMarca.value;
      console.log(this.registerMarca.value);
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('detalle',detalle);
      formData.append('src', src);
      formData.append('file', this.images);
      console.log(formData);    
      this.marcasService.postMarcas(formData)
        .pipe(
          tap((res) => console.log(res))
        )
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

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ContactanosModule } from '../../contactanos.module';
import { ContactanosService } from '../../servicio/contactanos.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contac: ContactanosModule[]= []
  contacto!: ContactanosModule;
  contactanosForm: FormGroup = new FormGroup({});
  


  formulario:{
    valor:Array<any>
  }= {valor: []}
  

  constructor(private formService: ContactanosService) {
    

}

  ngOnInit(): void {
    this.openCentrado2(); 

    this.formulario.valor=[
      {
        id:"1",
        provincia:"Esmeralda",
        ciudad:"Esmeralda"
        
      }, 
      {
        id:"2",
        provincia:"Guayas",
        ciudad:"Guayaquil"
        
      },
      {
        id:"3",
        provincia:"Pichincha",
        ciudad:"Quito"
        
      } ,
      {
        id:"4",
        provincia:"Azuay",
        ciudad:"Cuenca"
        
      } ,
      {
        id:"5",
        provincia:"El Oro",
        ciudad:"Machala"
        
      } 
    ]
  
  }

  openCentrado2(){
    this.contactanosForm = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required,
        ]),
         direccion: new FormControl('',
          [
            Validators.required,
          ]),
          correo: new FormControl('',
          [
            Validators.required,
          ]),
         
          mensaje: new FormControl('',
          [
            Validators.required,
          ]),
           ciudad: new FormControl('',
          [
            
          ]),
          provincia: new FormControl('',
          [
            
          ])
      }
    )
  }

  obtenerValores(){
    const {nombre,correo, direccion,ciudad,provincia,mensaje}=this.contactanosForm.value
    const formData = new FormData();
    formData.append('correo', correo);
    formData.append('nombre',nombre);
    formData.append('direccion', direccion);
    formData.append('ciudad', ciudad);
    formData.append('provincia', provincia);
    formData.append('mensaje', mensaje);
    console.log(this.contactanosForm.value)
    this.formService.postContactanos(formData).pipe(
      tap((res) =>(console.log(res)))
    )
    
  }

 
  

}

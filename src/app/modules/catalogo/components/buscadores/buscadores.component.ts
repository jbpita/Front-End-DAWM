import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/core/models/marcas-model';
import { MarcasService } from '../../services/marcas.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-buscadores',
  templateUrl: './buscadores.component.html',
  styleUrls: ['./buscadores.component.css']
})
export class BuscadoresComponent implements OnInit {
  marcas: Marca[] = [{
    id:1,
    nombre: "Bosch",
    descripcion: "hola"
  },{
    id:2,
    nombre: "Dacar",
    descripcion: "hola"
  },{
    id:2,
    nombre: "Mac",
    descripcion: "hola"
  }]

  //marcas!: Marca[]
 /* constructor(private marcasServices:MarcasService) { }*/
 constructor() { }
  ngOnInit(): void {
    console.log(this.marcas)
    /*cargarmarcas()*/
  }
  /*
  private cargarmarcas(){
    this.marcasServices.getMarcas()
    .pipe(
      tap((marcas: Marca[]) => this.marcas = marcas))
    .subscribe()
  }*/

}

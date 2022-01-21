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
  marcas: Marca[] = []

 constructor(private marcasServices:MarcasService) { }
  ngOnInit(): void {
    this.cargarmarcas()
  }
  
  private cargarmarcas(){
    this.marcasServices.getMarcas()
    .pipe(
      tap((marcas: Marca[]) => {this.marcas = marcas
      console.log(this.marcas)}))
    .subscribe()
  }
  
  presentar(id:number){
    console.log(id)
            
  }

}

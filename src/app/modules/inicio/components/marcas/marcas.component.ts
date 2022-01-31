import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Marca } from 'src/app/core/models/marcas-model';
import { MarcasService } from 'src/app/modules/catalogo/services/marcas.service';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas:Marca[] = []

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

}

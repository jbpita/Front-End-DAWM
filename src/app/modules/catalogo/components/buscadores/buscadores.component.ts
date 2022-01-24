import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Marca } from 'src/app/core/models/marcas-model';
import { MarcasService } from '../../services/marcas.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-buscadores',
  templateUrl: './buscadores.component.html',
  styleUrls: ['./buscadores.component.css']
})
export class BuscadoresComponent implements OnInit {
  @Output() id_marca = new EventEmitter<number>();

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
  
  presentar(event:any,id_marca:number){
    let marcas = Array.prototype.slice.call(document.getElementById("navproductos")?.getElementsByTagName("a"));
    for (let marca of marcas) {
      if ( event.target.innerHTML != marca.innerHTML) {
          marca.classList.remove("active")
      }
  }
    event.target.classList.add("active")
    this.id_marca.emit(id_marca)
  }
}

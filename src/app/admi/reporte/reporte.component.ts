import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';
import { Reporte } from '../reporte.model';
import { tap , catchError } from 'rxjs/operators';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  reporte: Reporte[] = [];

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.cargarReporte()
  }

  cargarReporte(){
    this.reporteService.getReporte()
    .pipe(
      tap((reporte) => {
        this.reporte = reporte;
        console.log(this.reporte);
      })
    ).subscribe()
  }

}

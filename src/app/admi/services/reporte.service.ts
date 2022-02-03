import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../reporte.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiURl = `http://localhost:3002/datos`;

  constructor(private http: HttpClient) { }

  getReporte(): Observable<Reporte[]>{
    return this.http.get<Reporte[]>(this.apiURl);
  }
}

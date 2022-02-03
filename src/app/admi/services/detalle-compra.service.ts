import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleCompra } from '../detalleCompra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {

  private apiURl = 'http://localhost:3001/detallecompras';

  constructor(private http: HttpClient) { }

  getDetalleCompra(): Observable<DetalleCompra[]>{
    return this.http.get<DetalleCompra[]>(this.apiURl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compra } from 'src/app/core/models/compra-model';
import { DetalleCompra } from 'src/app/core/models/detalleCompra-model';
import { MetodoPago } from 'src/app/core/models/metodoPago-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraProductosService {

  constructor(private http:HttpClient) { }
  crearMetodoPago(metodoP: MetodoPago): Observable<any>{
    return this.http.post<MetodoPago>(`${environment.API_URL}/metodospagos`,metodoP)
    .pipe(
      map((res:MetodoPago) =>{
        return res;
      }))
  }
  crearCompra(compra: Compra): Observable<any>{
    console.log("Compra --->",compra)
    return this.http.post<Compra>(`${environment.API_URL}/compras`,compra)
    .pipe(
      map((res:Compra) =>{
        return res;
      }))
  }
  crearDetalleC(DetalleC: DetalleCompra): Observable<any>{
    console.log("Detalle --->",DetalleC)
    return this.http.post<DetalleCompra>(`${environment.API_URL}/detallecompras`,DetalleC)
    .pipe(
      map((res:DetalleCompra) =>{
        return res;
      }))
  }
  updateStock(productId: number, stock: number): Observable<any> {
    console.log(productId,"------", stock)
    const body = { "stock": stock };
    return this.http.put<any>(`${environment.API_URL}/productos/${productId}`, body)
    .pipe(
      map((res) =>{
        return res;
      }));
  }

  enviarCorreo(correo:string): Observable<any> {
    console.log(correo)
    const body = { "correoUser": correo };
    return this.http.post<any>(`${environment.API_URL}/correo`, body)
    .pipe(
      map((res) =>{
        return res;
      }));
  }


}

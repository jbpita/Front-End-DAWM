import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product , ResponceUpdate} from '../producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURl = `http://localhost:3001/productos/`;

  
  
  constructor(private http: HttpClient) { }

  getProductos(id_marca: number): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURl+`/marca/${id_marca}`);
  }

  deleteProducto(id_producto: number){
    return this.http.delete(this.apiURl+`${id_producto}`,{responseType: 'text'}); 
  }

  update(producto : Product): Observable<ResponceUpdate>{
    return this.http.put<ResponceUpdate>(this.apiURl, producto ,{responseType: 'json'})
  }
}

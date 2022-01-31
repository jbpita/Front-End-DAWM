import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product-model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogosProductosService {
  private apiURl = 'http://localhost:3001/productos';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURl);
  }
  
  getProductsB(id_marca:number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURl}/marca/${id_marca}`);
  }
  

  
}

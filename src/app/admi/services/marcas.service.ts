import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from 'src/app/core/models/marcas-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private apiURl = 'http://localhost:3001/marcas';
  constructor(private http: HttpClient) { }
  
  getMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.apiURl);
  }
}

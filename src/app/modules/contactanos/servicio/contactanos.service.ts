import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  
  private apiURl = 'http://localhost:3001/correo';

  // postContactanos(formData: FormData) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  postContactanos(contactanos:FormData):Observable<any>{
    
    return this.http.post<any>(this.apiURl, contactanos)
      
  };

}


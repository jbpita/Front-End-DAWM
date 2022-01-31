import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserResponse } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggeIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { 
    this.checkToken
  }
  get isLogged(): Observable<boolean>{
    return this.loggeIn.asObservable();
  }
  login(authData: User): Observable<any>{
    return this.http.post<UserResponse>(`${environment.API_URL}/login`,authData)
    .pipe(
      map((res:UserResponse) =>{
        this.saveToken(res.success);
        this.loggeIn.next(true);
        return res;
      }),
      catchError((err)=> this.handlerError(err))
    )
  }
  logout(): void{
    localStorage.removeItem('token');
    this.loggeIn.next(false);
    window.location.reload();
  }
  private checkToken():void{
    if(localStorage.getItem('token')){
      const userToken  = String(localStorage.getItem('token'));
      const isExpires = helper.isTokenExpired(userToken);
      console.log('isExpired-->',isExpires)
      if(isExpires){
        this.logout();
      }
      else{
        this.loggeIn.next(true);
      }
    }
    
  }
  private saveToken(token:string):void{
    localStorage.setItem('token',token)
  }
  
  private handlerError(err:any):Observable<never>{
    let errorMessage = "Error en la Data"
    if(err){
      errorMessage = `Error: code ${err.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}
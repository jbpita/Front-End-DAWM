import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/inicio-sesion/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChechLoginGuard implements CanActivate {
  quantity2!:boolean;

  constructor(private authSvc: AuthService,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    this.authSvc.isLogged.pipe(
      tap((qty:boolean) => {this.quantity2 = qty;
      })
    ).subscribe()
    if(this.quantity2){
      this.router.navigate([''])
      return false;
    }
    return true;
  }
  
}

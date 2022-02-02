import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription(); 
  loginForm: FormGroup = new FormGroup({});

  
  constructor(private authSvc:AuthService, private router:Router) { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        correo: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(12)
          ])
      }
    )
  }
  onLogin():void{
    const formValue = this.loginForm.value;
    this.subscriptions.add(
      this.authSvc.login(formValue).subscribe( (res) =>{
        if(res){
          if(res.role == "cliente"){
            this.router.navigate([''])
          }
          if(res.role == "admin"){
            this.router.navigate(['/admi-console'])
          }
        }
      }
      )
    )
    
}
}

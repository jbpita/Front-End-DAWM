import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  loginForm = this.fb.group({
    correo: [''],
    password: ['']
  })
  constructor(private authSvc:AuthService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
  }
  onLogin():void{
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe( (res) =>{
      if(res){
        this.router.navigate([''])
      }
    }
    )
}
}

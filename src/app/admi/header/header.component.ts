import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/inicio-sesion/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.authSvc.logout();
  }

}

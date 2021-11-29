import { Component, OnInit } from '@angular/core';
import {  side_option } from '../sidebar.option';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  options = side_option;

 

  constructor() { console.log(this.options);}

  ngOnInit(): void {
  }

  handleClick(item:{}){

  }

}

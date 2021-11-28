import { Component, Input, OnInit, Optional } from '@angular/core';
import { Option } from '../sidebar.option';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.css']
})

export class SidebarOptionComponent implements OnInit {
  
  @Input() option !: Option ;
  constructor() {console.log(this.option) }

  ngOnInit(): void {
  }

}

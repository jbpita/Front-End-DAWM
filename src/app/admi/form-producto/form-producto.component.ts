import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  //checkoutForm: FormGroup;
  producto = {
    name: '',
    description: '',
    marca:'',
    precio: 0,
    image: ''
  };

  //checkoutForm = this.formBuilder.group();


  constructor(
    private formBuilder: FormBuilder,
  ) {
     
  }

  ngOnInit(): void {
  }

}

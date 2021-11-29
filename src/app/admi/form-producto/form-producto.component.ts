import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  //checkoutForm: FormGroup;

  

  constructor(
    private formBuilder: FormBuilder,
  ) {
     
  }

  ngOnInit(): void {
  }

}

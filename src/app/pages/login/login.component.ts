import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
    ) { }
  
  formulario: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }


  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      usuario: [null, Validators.required]
    });
  }
  
  entrar(){    
    if(this.formulario.valid){
      this.router.navigate(['listagem']);
    }
  }

}

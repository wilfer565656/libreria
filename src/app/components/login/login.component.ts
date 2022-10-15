
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    
  iniciarUser: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.iniciarUser = this.fb.group({

      correo: ['', Validators.required],

      contrasenia: ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    console.log(this.iniciarUser);

    const login: Login = {
      correo: this.iniciarUser.get('correo')?.value,
      contrasenia: this.iniciarUser.get('contrasenia')?.value,
    }

    console.log(login);

  }
}
  
/*
  login(form:NgForm){
    //se recibe la inf

    const correo=form.value.correo

    const contraseña=form.value.contraseña
  }*/


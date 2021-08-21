import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-validation-login',
  templateUrl: './validation-login.component.html',
  styleUrls: ['./validation-login.component.css']
})
export class ValidationLoginComponent implements OnInit {
  //variables
  titulo: string = 'Ingresa tus datos p manoo';
  usuario: Usuario;
  constructor() {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  login() : void 
  {
    console.log(this.usuario);
  }
}

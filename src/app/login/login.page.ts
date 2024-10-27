import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables
  usuario: string = "";
  contra: string = "";
  usuarioInvalido: boolean = false;
  passwordInvalido: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){

    //Verifica usuario
    this.usuarioInvalido = !(this.usuario.length >= 3 && this.usuario.length <= 8 && this.isAlphanumeric(this.usuario)); //false

    //Verifica contraseña
    this.passwordInvalido = !(this.isNumericPassword(this.contra));

    //Cumple con requisitos de usuario y contraseña para iniciar sesión
    if(!this.usuarioInvalido && !this.passwordInvalido){

      console.log("Inicio de sesión exitoso");
      let navigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    }
    else{
      console.log("Usuario o contraseña no válidos");
      this.usuario = "";
      this.contra= "";

    }

  } // fin inicio de sesión

  //Funciones de validación
  isAlphanumeric(usuario: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(usuario);
  }

  isNumericPassword(contra: string): boolean {
    return /^[0-9]{4}$/.test(contra);
  }

}

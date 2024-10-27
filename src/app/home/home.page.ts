import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //@ViewChild('datetime', { static: false}) datetime!: ElementRef;

  usuarioRecibido: string ="";
  nombre: string = '';
  apellido: string = '';
  animar: boolean = false;

  fechaSeleccionada: string = '';
  mostrarCalendario: boolean = false;

  isAlertOpen = false;
  alertButtons = ['Cerrar'];

  constructor(private activerouter: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {

    this.activerouter.queryParams.subscribe(params =>{

      if(this.router.getCurrentNavigation()?.extras?.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
      }

    })

  }

  //limpiar inputs nombre y apellido 
  limpiarInputs() {

    //Limpiar los campos
    this.nombre = '';
    this.apellido = '';

    //Activar animación
    this.animar = true;

    //Desactivar animación después de 1 segundo
    setTimeout(() => {

      this.animar = false;

    }, 1000);

}// fin limpiar

//Calendario
abrirCalendario() {
  this.mostrarCalendario = !this.mostrarCalendario;
}

//Ventana emergente
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}



}//export
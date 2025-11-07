import { Component, Input } from '@angular/core';
import { Coche } from '../../models/Coche';
import { flush } from '@angular/core/testing';
@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent {
  @Input() car!: Coche;
  public mensaje: string;

  constructor(){
    this.mensaje = "";
  }

  comprobarEstado(): boolean{
    if(this.car.estado == false){
      this.mensaje = "el coche está apagado!!!";
      this.car.velocidad = 0;
      return false;
    }
    else{
      this.mensaje = "Arrancando!!";
      return true;
    }
  }

  cambiarEstadoCoche():void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado()
  }

  acelerarCoche():void{
    if(this.comprobarEstado() == false){
      alert("donde vas? que estoy apagado!")
    }
    else{
      this.car.velocidad += this.car.aceleracion;
    }
  }

}

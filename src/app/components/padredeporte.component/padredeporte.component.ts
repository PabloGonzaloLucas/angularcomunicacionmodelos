import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeporte.component',
  standalone: false,
  templateUrl: './padredeporte.component.html',
  styleUrl: './padredeporte.component.css',
})
export class PadredeporteComponent {
  public deportes: Array<string>;
  public mensaje: string;
  //necesitamos un metodo que recibirá event que va a ser cualquier tipado (any)
  seleccionarFavoritoPadre(event:string):void{
    console.log("Comunicando al padre!!" + event);
    this.mensaje = "Deporte favorito " + event;
  }

  constructor(){
    this.mensaje="";
    this.deportes = ["Futbol", "Basket", "Beisbol", "Natacion", "Dados"]
  }
}

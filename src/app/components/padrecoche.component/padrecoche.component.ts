import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';
@Component({
  selector: 'app-padre-coche',
  standalone: false,
  templateUrl: './padrecoche.component.html',
  styleUrl: './padrecoche.component.css',
})
export class PadrecocheComponent {
  public cochesArray: Array<Coche>;
  constructor(){
    this.cochesArray = [
      new Coche("Ford", "Mustang", 400, 30, false),
      new Coche("Volkswagen", "Escarabajo", 110, 4, false),
      new Coche("Lamborghini", "Diablo", 800, 72, false)
    ]
  }
}

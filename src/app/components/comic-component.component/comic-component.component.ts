import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Comic } from '../../models/Comic';
@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic-component.component.html',
  styleUrl: './comic-component.component.css',
})

export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter<any>();
  marcarFavorito():void {
    this.seleccionarFavorito.emit(this.comic);
  }

  eliminarComic(): void{
    this.deleteComic.emit(this.index)
  }

  constructor(){

  }
}

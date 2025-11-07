import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria-component.component.html',
  styleUrl: './libreria-component.component.css',
  //DEBEMOS DECLARAR EL SERVICIO PARA PODER RECUPERARLO DENTRO DE UN CONSTRUCTOR

})
export class LibreriaComponent implements OnInit{
  @ViewChild("cajaTitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajaDescripcion") cajaDescripcion!: ElementRef;
  @ViewChild("cajaImagen") cajaImagen!: ElementRef;

  public comics! : Comic[];
  public comicFavorito!: Comic;
  seleccionarFavorito(favorito: Comic): void{
    this.comicFavorito = favorito;
  }

  deleteComic(index:number){
    this.comics.splice(index, 1);
  }

  createComic(): void{
    let titulo = this.cajaTitulo.nativeElement.value;
    let descripcion = this.cajaDescripcion.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let comicNew = new Comic(titulo, imagen, descripcion);
    this.comics.push(comicNew);
  }

  constructor(private _service: ServiceComics){


  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}

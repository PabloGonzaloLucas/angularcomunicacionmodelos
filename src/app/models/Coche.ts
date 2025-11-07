export class Coche{
  public marca: string;
  public modelo: string;
  public velocidad: number;
  public aceleracion: number;
  public estado: boolean;


  constructor(marca: string, modelo: string, velocidad: number, aceleracion: number, estado: boolean){
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.aceleracion = aceleracion;
    this.estado = estado;
  }
}

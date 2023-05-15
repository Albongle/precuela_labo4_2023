import { Actor } from './actor.model';

export class Pelicula {
  public id?: number;
  public nombre?: string;
  public tipo?: TipoPelicula;
  public fechaDeEstreno?: Date;
  public cantidadDePulibico?: number;
  public fotoDeLaPelicula?: string;
  public actor?: Actor;

  constructor(value: {
    id?: number;
    nombre?: string;
    tipo?: TipoPelicula;
    fechaDeEstreno?: Date;
    cantidadDePulibico?: number;
    fotoDeLaPelicula?: string;
    actor?: Actor;
  }) {
    this.id = value.id;
    this.nombre = value.nombre;
    this.tipo = value.tipo;
    this.fechaDeEstreno = value.fechaDeEstreno;
    this.cantidadDePulibico = value.cantidadDePulibico;
    this.fotoDeLaPelicula = value.fotoDeLaPelicula;
    this.actor = value.actor;
  }
}

export enum TipoPelicula {
  Terror = 'terror',
  Comedia = 'comedia',
  Amor = 'amor',
  Otros = 'otros',
}

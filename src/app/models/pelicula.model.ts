import { Actor } from './actor.model';

export class Pelicula {
  public id?: number;
  public nombre?: string;
  public tipo?: TipoPelicula;
  public fechaDeEstreno?: Date;
  public cantidadDePulibico?: number;
  public fotoDeLaPelicula?: string;
  public actor?: Actor;
}

export enum TipoPelicula {
  Terror = 'terror',
  Comedia = 'comedia',
  Amor = 'amor',
  Otros = 'otros',
}

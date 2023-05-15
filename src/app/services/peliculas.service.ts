import { Injectable } from '@angular/core';
import { Pelicula, TipoPelicula } from '../models/pelicula.model';
const listadoDePeliculasDefault: Pelicula[] = [
  {
    id: 1,
    nombre: 'Black Dragons',
    tipo: TipoPelicula.Otros,
    fechaDeEstreno: new Date('2023-04-20'),
    cantidadDePulibico: 637,
    fotoDeLaPelicula: 'http://dummyimage.com/107x100.png/5fa2dd/ffffff',
  },
  {
    id: 2,
    nombre: 'Children of the Secret State',
    tipo: TipoPelicula.Amor,
    fechaDeEstreno: new Date('2023-01-12'),
    cantidadDePulibico: 924,
    fotoDeLaPelicula: 'http://dummyimage.com/172x100.png/dddddd/000000',
  },
  {
    id: 3,
    nombre: 'Gun Fury',
    tipo: TipoPelicula.Amor,
    fechaDeEstreno: new Date('2022-07-26'),
    cantidadDePulibico: 760,
    fotoDeLaPelicula: 'http://dummyimage.com/201x100.png/dddddd/000000',
  },
  {
    id: 4,
    nombre: 'The Big Cube',
    tipo: TipoPelicula.Comedia,
    fechaDeEstreno: new Date('2022-11-05'),
    cantidadDePulibico: 555,
    fotoDeLaPelicula: 'http://dummyimage.com/113x100.png/cc0000/ffffff',
  },
  {
    id: 5,
    nombre: '7 Seconds',
    tipo: TipoPelicula.Comedia,
    fechaDeEstreno: new Date('2022-08-15'),
    cantidadDePulibico: 309,
    fotoDeLaPelicula: 'http://dummyimage.com/117x100.png/5fa2dd/ffffff',
  },
  {
    id: 6,
    nombre: 'Last Wedding, The (Kivenpyörittäjän kylä)',
    tipo: TipoPelicula.Amor,
    fechaDeEstreno: new Date('2022-02-01'),
    cantidadDePulibico: 483,
    fotoDeLaPelicula: 'http://dummyimage.com/233x100.png/ff4444/ffffff',
  },
  {
    id: 7,
    nombre: 'Rare Birds',
    tipo: TipoPelicula.Amor,
    fechaDeEstreno: new Date('2022-06-25'),
    cantidadDePulibico: 887,
    fotoDeLaPelicula: 'http://dummyimage.com/186x100.png/5fa2dd/ffffff',
  },
  {
    id: 8,
    nombre: "Money (L'argent)",
    tipo: TipoPelicula.Comedia,
    fechaDeEstreno: new Date('2022-01-21'),
    cantidadDePulibico: 176,
    fotoDeLaPelicula: 'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
  },
  {
    id: 9,
    nombre: 'Unspeakable Act, The',
    tipo: TipoPelicula.Terror,
    fechaDeEstreno: new Date('2023-02-13'),
    cantidadDePulibico: 544,
    fotoDeLaPelicula: 'http://dummyimage.com/116x100.png/cc0000/ffffff',
  },
  {
    id: 10,
    nombre: 'Austin Powers: The Spy Who Shagged Me',
    tipo: TipoPelicula.Amor,
    fechaDeEstreno: new Date('2022-09-17'),
    cantidadDePulibico: 712,
    fotoDeLaPelicula: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
  },
];

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private listadoPeliculas: Pelicula[];

  constructor() {
    this.listadoPeliculas =
      JSON.parse(sessionStorage.getItem('peliculas') as string) ??
      listadoDePeliculasDefault;
  }

  public getPeliculas() {
    return this.listadoPeliculas;
  }
  public guardarPelicula(pelicula: Pelicula) {
    this.listadoPeliculas.push(pelicula);
    sessionStorage.setItem('peliculas', JSON.stringify(this.listadoPeliculas));
  }
  public getUltimoId() {
    return this.listadoPeliculas.reduce((prev, curr) =>
      prev.id! > curr.id! ? prev : curr
    ).id;
  }
}

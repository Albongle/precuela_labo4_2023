import { Component } from '@angular/core';
import {
  Pelicula,
  listadoDePeliculas,
} from '../../../app/models/pelicula.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent {
  protected listadoPeliculas: Array<Pelicula>;

  constructor() {
    this.listadoPeliculas = listadoDePeliculas;
  }
}

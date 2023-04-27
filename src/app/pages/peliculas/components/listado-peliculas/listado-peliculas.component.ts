import { Component } from '@angular/core';
import {
  Pelicula,
  listadoDePeliculas,
} from '../../../../../app/models/pelicula.model';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss'],
})
export class ListadoPeliculasComponent {
  protected listadoPeliculas: Array<Pelicula>;

  constructor() {
    this.listadoPeliculas = listadoDePeliculas;
  }
}

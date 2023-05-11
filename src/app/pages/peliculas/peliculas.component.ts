import { Component } from '@angular/core';
import { Pelicula } from '../../../app/models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent {
  public listadoPeliculas: Array<Pelicula>;

  constructor(private readonly peliculaService: PeliculasService) {
    this.listadoPeliculas = this.peliculaService.getPeliculas();
  }
}

import { Component } from '@angular/core';
import { Pelicula } from '../../../../../app/models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss'],
})
export class ListadoPeliculasComponent {
  protected listadoPeliculas: Array<Pelicula>;
  public itemSeleccionado: any;
  constructor(private readonly peliculaService: PeliculasService) {
    this.listadoPeliculas = this.peliculaService.getPeliculas();
  }

  public handlerDetalleItem($event: Event) {
    console.log($event);
  }
}

import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  protected elementos: Array<any>;
  public itemSeleccionado: any;
  /**
   *
   */
  constructor(private readonly peliculaService: PeliculasService) {
    this.elementos = this.peliculaService.getPeliculas();
  }
  public handlerDetalleItem($event: Event) {
    this.itemSeleccionado = $event;
  }
}

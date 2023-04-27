import { Component } from '@angular/core';
import { listadoDePeliculas } from '../../models/pelicula.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  protected elementos: Array<any> = listadoDePeliculas;
  public itemSeleccionado: any;

  public handlerDetalleItem($event: Event) {
    this.itemSeleccionado = $event;
  }
}

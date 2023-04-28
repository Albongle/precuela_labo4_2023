import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  public pais: any;

  public handlerPais($event: Event) {
    console.log('pais seleccionado', $event);
    this.pais = $event;
  }
}

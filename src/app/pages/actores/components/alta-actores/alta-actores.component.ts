import { Component } from '@angular/core';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  public pais: any;
  public validar: string;
  public actor: {
    nombre?: string;
    apellido?: string;
    usuario?: string;
    email?: string;
    direccion?: string;
    pais?: any;
  };

  constructor() {
    this.validar = 'invalid-feedback';
    this.actor = {};
  }

  public handlerPais($event: Event) {
    this.pais = $event;
    this.actor.pais = this.pais;
  }

  public cargar() {
    console.log(this.actor);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  @Output() public eventNuevoActor: EventEmitter<any>;
  public pais: any;
  public validar: string;
  protected actor: Actor;

  constructor(private readonly actoresService: ActorService) {
    this.validar = 'invalid-feedback';
    this.actor = new Actor();
    this.eventNuevoActor = new EventEmitter();
  }

  public handlerPais($event: Event) {
    this.pais = $event;
    this.actor.pais = this.pais;
  }

  public crearActor() {
    this.actoresService.guardarActor(this.actor);
    this.actoresService.getActores();
    this.eventNuevoActor.emit(this.actor);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.scss'],
})
export class ListadoActoresComponent {
  @Input() public listadoDeActores: Actor[];
  @Output() public enventSelectActor: EventEmitter<any>;

  constructor(private readonly actorService: ActorService) {
    this.enventSelectActor = new EventEmitter();
    this.listadoDeActores = this.actorService.getActores();
  }

  public handlerDetalleItem($event: Event) {
    this.enventSelectActor.emit($event);
  }
}

import { Component } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss'],
})
export class AltaPeliculasComponent {
  protected actor: Actor;
  protected crearPelicula() {
    throw new Error('Method not implemented.');
  }
  constructor(protected readonly actorService: ActorService) {}

  public handlerGetActor($event: Event) {
    this.actor = $event as Actor;
  }
}

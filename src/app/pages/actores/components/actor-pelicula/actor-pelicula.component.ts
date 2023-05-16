import { Component } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss'],
})
export class ActorPeliculaComponent {
  protected listadoDeActores: Actor[];
  protected peliculasDelActor: Pelicula[];
  public actor: Actor;
  constructor(
    private readonly actorService: ActorService,
    private readonly peliculasService: PeliculasService
  ) {
    this.listadoDeActores = this.actorService.getActores();
    this.peliculasDelActor = [];
  }

  protected handlerActor($event: Event) {
    this.actor = $event as Actor;
    this.peliculasDelActor = this.peliculasService
      .getPeliculas()
      .filter((p) => p.actor?.email === this.actor.email);
  }
}

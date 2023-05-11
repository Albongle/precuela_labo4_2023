import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private listadoDeActores: Actor[];

  constructor() {
    this.listadoDeActores =
      JSON.parse(sessionStorage.getItem('actores') as string) ?? [];
  }

  public guardarActor(actor: Actor) {
    this.listadoDeActores.push(actor);
    sessionStorage.setItem('actores', JSON.stringify(this.listadoDeActores));
  }

  public getActores() {
    return this.listadoDeActores;
  }
}

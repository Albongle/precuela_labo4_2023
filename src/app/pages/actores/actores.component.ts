import { Component } from '@angular/core';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss'],
})
export class ActoresComponent {
  public actores: any[];
  constructor() {
    this.actores = [];
  }

  public handlerNuevoActor($event: Event) {
    this.actores.push($event);
    console.log($event);
  }
}

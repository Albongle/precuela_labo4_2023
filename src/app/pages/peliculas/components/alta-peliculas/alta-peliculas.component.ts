import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { ActorService } from 'src/app/services/actor.service';
import { AlertService } from 'src/app/services/alert.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss'],
})
export class AltaPeliculasComponent {
  protected actor: Actor;
  protected formAltaPelicula: FormGroup;

  constructor(
    protected readonly actorService: ActorService,
    private readonly formBuilder: FormBuilder,
    private readonly alertService: AlertService,
    private readonly peliculaService: PeliculasService
  ) {
    this.formAltaPelicula = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fechaDeEstreno: ['', Validators.required],
      cantidadDePulibico: ['', Validators.required],
      fotoDeLaPelicula: ['', Validators.required],
      actor: ['', Validators.required],
    });
  }

  public handlerGetActor($event: Event) {
    this.actor = $event as Actor;
    this.formAltaPelicula.controls['actor'].disable();
    this.formAltaPelicula.controls['actor'].setValue(
      `${this.actor.apellido}, ${this.actor.nombre}`
    );
  }

  protected crearPelicula() {
    if (this.formAltaPelicula.valid) {
      const id = this.peliculaService.getUltimoId()! + 1;
      const actor = this.actor;
      const pelicula = new Pelicula({
        ...this.formAltaPelicula.value,
        id,
        actor,
      });
      this.peliculaService.guardarPelicula(pelicula);
      this.alertService.showAlert({
        icon: 'success',
        message: 'Pelicula creada con exito',
      });
    } else {
      this.alertService.showAlert({
        icon: 'error',
        message: 'Debe elegir un actor y completar el formulario para el alta',
      });
    }
  }
}

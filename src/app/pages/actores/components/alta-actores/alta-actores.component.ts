import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pais } from 'src/app/models/pais.model';
import { ActorService } from 'src/app/services/actor.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  @Output() public eventNuevoActor: EventEmitter<any>;
  protected frmAltaActor: FormGroup;
  protected pais: Pais;
  protected actor: Actor;

  constructor(
    private readonly actoresService: ActorService,
    private readonly formBuilder: FormBuilder,
    private readonly alertService: AlertService
  ) {
    this.eventNuevoActor = new EventEmitter();
    this.frmAltaActor = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pais: ['', Validators.required],
    });
  }

  public handlerPais($event: Event) {
    this.pais = $event as Pais;
    this.frmAltaActor.controls?.['pais'].setValue(this.pais);
  }

  public crearActor() {
    if (this.frmAltaActor.valid) {
      this.actor = new Actor({ ...this.frmAltaActor.value });
      this.actoresService.guardarActor(this.actor);
      this.eventNuevoActor.emit(this.actor);
      this.alertService.showAlert({
        icon: 'success',
        message: 'Actor creado con exito',
      });
    } else {
      this.alertService.showAlert({
        icon: 'error',
        message:
          'Debe completar el formulario y seleccionar un pais para el alta',
      });
    }
  }
}

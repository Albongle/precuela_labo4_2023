import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { TablaPaisesModule } from '../../../app/modules/tabla-paises/tabla-paises.module';
import { ListadoModule } from '../../../app/modules/listado/listado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoActoresComponent } from './components/listado-actores/listado-actores.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { DetalleModule } from 'src/app/modules/detalle/detalle.module';

@NgModule({
  declarations: [
    ActoresComponent,
    AltaActoresComponent,
    ListadoActoresComponent,
    ActorPeliculaComponent,
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    TablaPaisesModule,
    ListadoModule,
    FormsModule,
    ReactiveFormsModule,
    DetalleModule,
  ],
  exports: [ListadoActoresComponent, AltaActoresComponent],
})
export class ActoresModule {}

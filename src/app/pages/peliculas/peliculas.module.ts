import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { AltaPeliculasComponent } from './components/alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { ListadoModule } from '../../../app/modules/listado/listado.module';

@NgModule({
  declarations: [
    PeliculasComponent,
    AltaPeliculasComponent,
    ListadoPeliculasComponent,
  ],
  imports: [CommonModule, PeliculasRoutingModule, ListadoModule],
})
export class PeliculasModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { TablaPaisesModule } from '../../../app/modules/tabla-paises/tabla-paises.module';
import { ListadoModule } from '../../../app/modules/listado/listado.module';

@NgModule({
  declarations: [ActoresComponent, AltaActoresComponent],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    TablaPaisesModule,
    ListadoModule,
  ],
})
export class ActoresModule {}

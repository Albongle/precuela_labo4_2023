import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { ListadoModule } from '../../modules/listado/listado.module';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [CommonModule, BusquedaRoutingModule, ListadoModule],
})
export class BusquedaModule {}
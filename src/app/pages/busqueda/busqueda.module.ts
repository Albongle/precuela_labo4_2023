import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { ListadoModule } from '../../modules/listado/listado.module';
import { DetalleModule } from 'src/app/modules/detalle/detalle.module';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [CommonModule, BusquedaRoutingModule, ListadoModule, DetalleModule],
})
export class BusquedaModule {}

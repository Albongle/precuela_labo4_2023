import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { GetKeysFromObject } from '../keys-from-object/keys-from-object.module';

@NgModule({
  declarations: [ListadoComponent, DetalleComponent],
  imports: [CommonModule, GetKeysFromObject],
  exports: [ListadoComponent, DetalleComponent],
})
export class ListadoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { ObjKeysToArrayPipe } from '../../../pipes/objKeysToArray.pipe';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [ListadoComponent, ObjKeysToArrayPipe, DetalleComponent],
  imports: [CommonModule],
  exports: [ListadoComponent, DetalleComponent],
})
export class ListadoModule {}

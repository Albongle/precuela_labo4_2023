import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './components/tabla-paises.component';
import { ListadoModule } from '../listado/listado.module';
import { HttpClientModule } from '@angular/common/http';
import { GetKeysFromObject } from '../keys-from-object/keys-from-object.module';

@NgModule({
  declarations: [TablaPaisesComponent],
  imports: [CommonModule, ListadoModule, HttpClientModule, GetKeysFromObject],
  exports: [TablaPaisesComponent],
})
export class TablaPaisesModule {}

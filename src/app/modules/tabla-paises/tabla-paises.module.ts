import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './components/tabla-paises.component';
import { ListadoModule } from '../listado/listado.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TablaPaisesComponent],
  imports: [CommonModule, ListadoModule, HttpClientModule],
  exports: [TablaPaisesComponent],
})
export class TablaPaisesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [ListadoComponent, TablaComponent, ListaComponent],
  imports: [CommonModule],
  exports: [ListadoComponent],
})
export class ListadoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListaComponent } from './components/lista/lista.component';
import { PaisPipe } from './pipes/pais.pipe';

@NgModule({
  declarations: [ListadoComponent, TablaComponent, ListaComponent, PaisPipe],
  imports: [CommonModule],
  exports: [ListadoComponent],
})
export class ListadoModule {}

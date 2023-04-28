import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './components/detalle.component';

@NgModule({
  declarations: [DetalleComponent],
  imports: [CommonModule],
  exports: [DetalleComponent],
})
export class DetalleModule {}

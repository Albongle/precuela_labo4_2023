import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  @Input() public elementosAListar: Array<any>;
  protected alternarVista: boolean;
  @Output() public eventDetallarItem: EventEmitter<any>;

  constructor() {
    this.alternarVista = false;
    this.eventDetallarItem = new EventEmitter();
  }

  public cambiarVista() {
    this.alternarVista = !this.alternarVista;
  }

  public seleccionarItem(item: any) {
    this.eventDetallarItem.emit(item);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  @Input() public listaDeElementos: Array<any>;
  @Input() public verComo: string;
  @Input() public config: {
    habilitarAlternarVista: boolean;
    habilitarDetalle?: boolean;
    verComo?: string;
  };
  @Output() public eventEnviarElemento: EventEmitter<any>;
  protected alternarVista: boolean;

  constructor() {
    this.eventEnviarElemento = new EventEmitter();
  }

  public cambiarVista() {
    this.alternarVista = !this.alternarVista;
  }

  public seleccionarItem(item: any) {
    this.eventEnviarElemento.emit(item);
  }
}

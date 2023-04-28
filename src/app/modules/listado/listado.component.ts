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
  private static modosVista = ['Ver como tabla', 'Ver como lista'];

  constructor() {
    this.eventEnviarElemento = new EventEmitter();
    this.verComo = ListadoComponent.modosVista[1];
  }

  public cambiarVista() {
    this.alternarVista = !this.alternarVista;
    this.verComo =
      ListadoComponent.modosVista[
        (ListadoComponent.modosVista.indexOf(this.verComo) + 1) %
          ListadoComponent.modosVista.length
      ];
  }

  public seleccionarItem(item: any) {
    this.eventEnviarElemento.emit(item);
  }
}

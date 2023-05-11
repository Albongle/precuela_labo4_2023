import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent {
  protected listadoPaises: Array<any>;
  @Output() public paisSeleccionado: EventEmitter<any>;
  @Output() public todosLosPaises: EventEmitter<any>;
  @Input() public activarSeleccion: boolean;

  constructor(private readonly paisesService: PaisService) {
    this.paisSeleccionado = new EventEmitter();
    this.todosLosPaises = new EventEmitter();
    this.paisesService.getPaises().subscribe((p) => {
      this.listadoPaises = p;
      this.todosLosPaises.emit(p);
    });
  }

  public seleccionarPais(item: any) {
    this.paisSeleccionado.emit(item);
  }
}

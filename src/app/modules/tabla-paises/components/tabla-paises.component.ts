import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent {
  protected listadoPaises: Array<any>;
  @Output() public paisSeleccionado: EventEmitter<any>;
  @Input() public activarSeleccion: boolean;

  constructor(private readonly httpClient: HttpClient) {
    this.getPaises().subscribe((p) => (this.listadoPaises = p));
    this.paisSeleccionado = new EventEmitter();
  }

  private getPaises() {
    return this.httpClient
      .get('https://restcountries.com/v3.1/subregion/South America')
      .pipe(
        map((data: any) => {
          return Array.from(data).map((p: any) => {
            const pais = {
              bandera: p.flags.svg,
              continente: p.continents.shift(),
              capital: p.capital.shift(),
              nombre: p.name.common,
              region: p.region,
              subRegion: p.subregion,
            };
            return pais;
          });
        })
      );
  }

  public seleccionarPais(item: any) {
    this.paisSeleccionado.emit(item);
  }
}

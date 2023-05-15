import { Pipe, PipeTransform } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Pipe({
  name: 'Pais',
})
export class PaisPipe implements PipeTransform {
  transform(value: unknown): string | undefined {
    const pais = value as Pais;
    return pais.nombre;
  }
}

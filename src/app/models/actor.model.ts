import { Pais } from './pais.model';

export class Actor {
  public nombre?: string;
  public apellido?: string;
  public usuario?: string;
  public email?: string;
  public direccion?: string;
  public pais?: Pais;
  constructor(values: {
    nombre?: string;
    apellido?: string;
    usuario?: string;
    email?: string;
    direccion?: string;
    pais?: Pais;
  }) {
    this.nombre = values.nombre;
    this.apellido = values.apellido;
    this.usuario = values.usuario;
    this.email = values.email;
    this.direccion = values.direccion;
    this.pais = values.pais;
  }

  public toString(): string {
    return `${this.apellido}, ${this.nombre}`;
  }
}

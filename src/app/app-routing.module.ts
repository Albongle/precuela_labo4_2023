import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'busqueda',
    loadChildren: () =>
      import('./pages/busqueda/busqueda.module').then((m) => m.BusquedaModule),
  },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./pages/peliculas/peliculas.module').then(
        (m) => m.PeliculasModule
      ),
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./pages/bienvenido/bienvenido.module').then(
        (m) => m.BienvenidoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

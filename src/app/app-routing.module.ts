import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ListadoPeliculasComponent } from './pages/peliculas/components/listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './pages/peliculas/components/alta-peliculas/alta-peliculas.component';

const routes: Routes = [
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
    children: [
      { path: 'alta', component: AltaPeliculasComponent },
      {
        path: 'listado',
        component: ListadoPeliculasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

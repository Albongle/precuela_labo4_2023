import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { AltaComponent } from './components/alta/alta.component';
import { ListadoComponent } from './components/listado/listado.component';

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
      { path: 'alta', component: AltaComponent },
      {
        path: 'listado',
        component: ListadoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

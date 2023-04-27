import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas.component';
import { AltaPeliculasComponent } from './components/alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';

const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'alta', component: AltaPeliculasComponent },
  { path: 'listado', component: ListadoPeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}

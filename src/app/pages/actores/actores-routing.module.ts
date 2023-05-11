import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actores.component';
import { AltaActoresComponent } from './components/alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './components/listado-actores/listado-actores.component';

const routes: Routes = [
  { path: '', component: ActoresComponent },
  { path: 'alta', component: AltaActoresComponent },
  { path: 'listado', component: ListadoActoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActoresRoutingModule {}

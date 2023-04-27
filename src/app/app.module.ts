import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { AltaComponent } from './components/alta/alta.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ObjKeysToArrayPipe } from 'src/pipes/objKeysToArray.pipe';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListadoPeliculasComponent } from './pages/peliculas/components/listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './pages/peliculas/components/alta-peliculas/alta-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    AltaComponent,
    ListadoComponent,
    PeliculasComponent,
    ObjKeysToArrayPipe,
    DetalleComponent,
    ListadoPeliculasComponent,
    AltaPeliculasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

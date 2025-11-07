import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { appRoutingProvider, routing } from './app-routing';
import { MenuComponent } from './components/menu.component/menu.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecocheComponent } from './components/padrecoche.component/padrecoche.component';
import { PadredeporteComponent } from './components/padredeporte.component/padredeporte.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';
import { LibreriaComponent } from './components/libreria-component.component/libreria-component.component';
import { ComicComponent } from './components/comic-component.component/comic-component.component';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ListaProductos,
    MenuComponent,
    HijococheComponent,
    PadrecocheComponent,
    PadredeporteComponent,
    HijodeporteComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceComics,
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

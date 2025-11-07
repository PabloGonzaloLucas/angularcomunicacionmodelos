import { ModuleWithProviders } from "@angular/core";
import { ListaProductos } from "./components/lista-productos/lista-productos";
import { RouterModule } from "@angular/router";
import { PadredeporteComponent } from "./components/padredeporte.component/padredeporte.component";
import { LibreriaComponent } from "./components/libreria-component.component/libreria-component.component";

const appRoutes = [
  {path:"productos", component: ListaProductos},
  {path:"padredeporte", component: PadredeporteComponent},
  {path:"comics", component: LibreriaComponent},
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)

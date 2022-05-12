import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CrearComponent } from './crear/crear.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { ModificarComponent } from './modificar/modificar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TycComponent } from './tyc/tyc.component';

const routes: Routes = [
  { path: 'principal', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'registro', component: CrearComponent },
  { path: 'mensajeria', component: MensajeriaComponent },
  { path: 'modificar', component: ModificarComponent },
  { path: 'terminos_y_condiciones', component: TycComponent },

//  { path: '**', pathMatch: 'full', redirectTo: 'login'}
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

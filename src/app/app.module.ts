import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { TycComponent } from './tyc/tyc.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { CrearComponent } from './crear/crear.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { PerfilComponent } from './perfil/perfil.component';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ModificarComponent,
    AyudaComponent,
    TycComponent,
    RecuperarComponent,
    CrearComponent,
    InicioComponent,
    MensajeriaComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    //BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

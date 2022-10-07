import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InicioSesionComponent } from './seguridad/inicio-sesion/inicio-sesion.component';
import { ListarUsuarioComponent } from './seguridad/listar-usuario/listar-usuario.component';
import { CrudComponent } from './seguridad/crud/crud.component';
import { RegistroLibroComponent } from './gestion_libros/registro-libro/registro-libro.component';
import { LoginUsuarioComponent } from './estados/login-usuario/login-usuario.component';
import { EstadoPrestamoComponent } from './estados/estado-prestamo/estado-prestamo.component';
import { PrestamoComponent } from './prestamo_libro/prestamo/prestamo.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ListarUsuarioComponent,
    CrudComponent,
    RegistroLibroComponent,
    LoginUsuarioComponent,
    EstadoPrestamoComponent,
    PrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

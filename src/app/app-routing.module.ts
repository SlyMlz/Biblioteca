import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CrudComponent} from './seguridad/crud/crud.component';
import {InicioSesionComponent} from './seguridad/inicio-sesion/inicio-sesion.component';
import {ListarUsuarioComponent} from './seguridad/listar-usuario/listar-usuario.component';

import {PrestamoComponent} from './prestamo_libro/prestamo/prestamo.component';

import {RegistroLibroComponent} from './gestion_libros/registro-libro/registro-libro.component';

import {EstadoPrestamoComponent} from './estados/estado-prestamo/estado-prestamo.component';
import {LoginUsuarioComponent} from './estados/login-usuario/login-usuario.component';

const routes: Routes = [
  {path:'login', component: LoginUsuarioComponent},
  {path:'crud',component:CrudComponent},
  {path:'seguridad/sesion',component:InicioSesionComponent},
  {path:'seguridad/listarU',component:ListarUsuarioComponent},
  {path:'prestamo',component:PrestamoComponent},
  {path:'gestion_libros',component:RegistroLibroComponent},
  {path:'estado_prestamo',component:EstadoPrestamoComponent},
  {path:'login_usuario',component:LoginUsuarioComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

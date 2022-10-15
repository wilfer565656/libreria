import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormControl} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import {HttpClientModule } from  '@angular/common/http'
import { PrestamoLibroComponent } from './components/prestamo-libro/prestamo-libro.component';
import { ListarPrestamoComponent } from './components/listar-prestamo/listar-prestamo.component';
import { EditarPrestamoComponent } from './components/editar-prestamo/editar-prestamo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    NavbarComponent,
    ListarLibrosComponent,
    AgregarLibroComponent,
    EditarLibroComponent,
    PrestamoLibroComponent,
    ListarPrestamoComponent,
    EditarPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

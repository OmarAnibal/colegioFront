import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarPersonaComponent } from './gestionar-persona/gestionar-persona.component';
import { GestionarLibrosComponent } from './gestionar-libros/gestionar-libros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GuardarPersonaComponent } from './guardar-persona/guardar-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    GestionarPersonaComponent,
    GestionarLibrosComponent,
    GuardarPersonaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatIconModule
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

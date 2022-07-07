import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarLibrosComponent } from './gestionar-libros/gestionar-libros.component';
import { GestionarPersonaComponent } from './gestionar-persona/gestionar-persona.component';

const routes: Routes = [
  { path: '', component: GestionarPersonaComponent},
  { path: 'gestionar-libros', component: GestionarLibrosComponent},
  { path: 'gestionar-persona', component: GestionarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

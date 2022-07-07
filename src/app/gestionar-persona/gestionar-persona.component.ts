import { Component, OnInit } from '@angular/core';
import { GuardarPersonaComponent } from '../guardar-persona/guardar-persona.component';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-gestionar-persona',
  templateUrl: './gestionar-persona.component.html',
  styleUrls: ['./gestionar-persona.component.css']
})
export class GestionarPersonaComponent implements OnInit {

  public listaPersona: Persona[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'email','municipio','editar'];

  constructor(
    private servicioPersona: PersonaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  public modalNuevaPersona(id: number){
    let dialogRef = this.dialog.open(GuardarPersonaComponent, {
      height: '700px',
      width: '800px',
    });
  }

  private listarTodos() {
    this.servicioPersona.listarTodos().subscribe(res => {
      this.listaPersona = res;
      console.log(this.listaPersona);
    }, error => {
      console.log("Ha ocurrido un error al cargar lista de personas");
    });
  }

  public editar(entidad:Persona){
    this.servicioPersona.actualizar(entidad).subscribe(res =>{
     console.log(entidad);
    })
  }

}

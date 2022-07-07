import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento } from '../model/departamento';
import { Municipio } from '../model/municipio';
import { Pais } from '../model/pais';
import { Persona } from '../model/persona';
import { TipoIdentificacion } from '../model/tipo-identificacion';
import { DepartamentoService } from '../service/departamento.service';
import { MunicipioService } from '../service/municipio.service';
import { PaisService } from '../service/pais.service';
import { PersonaService } from '../service/persona.service';
import { TipoIdentificacionService } from '../service/tipo-identificacion.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guardar-persona',
  templateUrl: './guardar-persona.component.html',
  styleUrls: ['./guardar-persona.component.css']
})
export class GuardarPersonaComponent implements OnInit {


  public formPersona!: FormGroup;
  public listaTipoId: TipoIdentificacion[] = [];
  public listaPais: Pais[] = [];
  public listaDepartamento: Departamento[] = [];
  public listaMunicipio: Municipio[] = [];

  constructor(
    private servicioTipoIdentificacion: TipoIdentificacionService,
    private servicioPais: PaisService,
    private servicioDepartamento: DepartamentoService,
    private servicioMunicipio: MunicipioService,
    private servicioPersona: PersonaService,
    private toast: ToastrService,
    public dialogRef: MatDialogRef<GuardarPersonaComponent>
    ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.listarTipoIdentificacion();
    this.listarPais();
  }



  private inicializarFormulario() {
    this.formPersona = new FormGroup({
      numeroIdentificacion: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      tiId: new FormControl(null, Validators.required),
      pais: new FormControl(null, Validators.required),
      departamento: new FormControl(null, Validators.required),
      municipio: new FormControl(null, Validators.required),

    })
  }


  private listarTipoIdentificacion(): void {
    this.servicioTipoIdentificacion.listarTodos().subscribe(res => {
      this.listaTipoId = res;
    }, error =>
      console.log("ha ocurrido un error al cargar los tipos de identificacion")
    )
  };


  private listarPais(): void {

    this.servicioPais.listarTodos().subscribe(res => {
      this.listaPais = res;
    }, error =>
      console.log("ha ocurrido un error al cargar los paises"))
  }

  public guardar() {

    let tipoIdentificacion: TipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.id = this.formPersona.controls['tiId'].value;

    let pais: Pais = new Pais();
    pais.id = this.formPersona.controls['pais'].value;

    let departamento: Departamento = new Departamento();
    departamento.id = this.formPersona.controls['departamento'].value;

    let municipio: Municipio = new Municipio();
    municipio.id = this.formPersona.controls['municipio'].value;

    let persona: Persona = new Persona();
    persona.tipoIdentificacion = tipoIdentificacion;
    persona.pais = pais;
    persona.departamento = departamento;
    persona.municipio = municipio;
    persona.nombre = this.formPersona.controls['nombre'].value;
    persona.apellido = this.formPersona.controls['apellido'].value;
    persona.telefono = this.formPersona.controls['telefono'].value;
    persona.direccion = this.formPersona.controls['direccion'].value;
    persona.email = this.formPersona.controls['email'].value;
    persona.numero = this.formPersona.controls['numeroIdentificacion'].value;

    console.log(persona);
    this.registrar(persona);
  }

  private registrar(persona: Persona) {
    this.servicioPersona.registrar(persona).subscribe(res => {
      this.toast.success("Ha registrado al estudiante","CORRECTO");
      this.dialogRef.close(true);
    }, error => {
      console.log("Ha ocurrido un error al registrar")
    })
  }

  public obtenerDepartamentoPorPaisId(): void {

    let id: number = this.formPersona.get("pais")?.value;

    this.servicioDepartamento.listarPorPaisId(id).subscribe(res => {
      this.listaDepartamento = res;
      this.listaMunicipio = [];
    }, error => {
      console.log("No se pudo obtener la lista");
    })
  }


  public listarMunicipioPorDepartamento(): void {

    let id: number = this.formPersona.get("departamento")?.value;

    this.servicioMunicipio.listarPorDepartamentoId(id).subscribe(res => {
      this.listaMunicipio = res;
    }, error => {
      console.log("se ha producido un error al obtener lista de municipios");
    })
  }

}

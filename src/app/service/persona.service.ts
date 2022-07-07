import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private path: string = environment.urlApi + '/persona';
  
  constructor(
    private http: HttpClient
  ) { }

  public listarTodos(){
    return this.http.get<Persona[]>(this.path);
  }

  public listarPorId(id:number){
    return this.http.get<Persona>('${this.path}/${id}');

  }

  public registrar(entidad: Persona){
    return this.http.post<void>(this.path, entidad)

  }

  public actualizar(entidad: Persona){
  return this.http.put<void>(this.path, entidad)

  }

  public eliminar(id:number){
    return this.http.delete<void>('${this.path}/${id}')

  }

}

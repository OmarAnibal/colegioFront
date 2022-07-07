import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../model/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private path: string = environment.urlApi + '/departamento';
  
  constructor(
    private http: HttpClient
  ) { }

  public listarTodos(){
    return this.http.get<Departamento[]>(this.path);
  }

  public listarPorId(id:number){
    return this.http.get<Departamento>('${this.path}/${id}');

  }

  public listarPorPaisId(id:number){
    return this.http.get<Departamento[]>(`${this.path}/lista-por-pais/${id}`);

  }

  public registrar(departamento: Departamento){
    return this.http.post<void>(this.path, departamento)

  }

  public actualizar(departamento: Departamento){
  return this.http.put<void>(this.path, departamento)

  }

  public eliminar(id:number){
    return this.http.delete<void>('${this.path}/${id}')

  }

}

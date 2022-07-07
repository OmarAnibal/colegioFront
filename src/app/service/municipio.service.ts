import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Municipio } from '../model/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private path: string = environment.urlApi + '/municipio';

  constructor(
    private http: HttpClient

  ) { }
  

    public listarTodos() {
      return this.http.get<Municipio[]>(this.path);
    }

    public listarPorDepartamentoId(id: number) {
      return this.http.get<Municipio[]>(`${this.path}/listar-por-departamento/${id}`);
    }

    

}

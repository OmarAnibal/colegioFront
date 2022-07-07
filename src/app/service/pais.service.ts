import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private path: string = environment.urlApi + '/pais';

  constructor(
    private http: HttpClient
    ) {}


    public listarTodos(){
      return this.http.get<Pais[]>(this.path);
    }

}

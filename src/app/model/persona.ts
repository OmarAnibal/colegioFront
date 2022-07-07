import { Departamento } from "./departamento";
import { Municipio } from "./municipio";
import { Pais } from "./pais";
import { TipoIdentificacion } from "./tipo-identificacion";

export class Persona {

    public id!: number;
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public email!: string;
    public telefono!: String;
    public numero!: string;
    public tipoIdentificacion!: TipoIdentificacion;
    public pais!: Pais;
    public departamento!: Departamento;
    public municipio!: Municipio;
    
}

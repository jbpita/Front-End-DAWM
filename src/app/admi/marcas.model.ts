
export interface MarcaRegistro {
    nombre: string;
    descripcion: string;
    src:string;
}

export interface Marca {
    id_marca:number;
    nombre: string;
    descripcion: string;
    src:string;
}

export interface ResponceUpdate {
    message : string,
    content : Marca
}
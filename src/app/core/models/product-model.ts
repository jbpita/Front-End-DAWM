import { Marca } from "./marcas-model";

export interface Product {
    id_producto: number,
    nombre: string,
    precio: number,
    detalle:  String,
    stock: number,
    src: string,
    marca: Marca,
    qty: number ;
    detalles:String[],
}

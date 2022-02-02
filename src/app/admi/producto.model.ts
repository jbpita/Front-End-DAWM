
export interface Product {
    id_producto: number,
    nombre: string,
    precio: number,
    detalle:  String,
    stock: number,
    src: string,
    id_marca: number
}

export interface ResponceUpdate {
    message : string,
    content : Product
}
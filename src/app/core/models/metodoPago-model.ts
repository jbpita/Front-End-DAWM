export interface MetodoPago {
    id_metodo : number ,
    tipo_pago: string,
    cvv: string|null,
    num_tarjeta:  string|null,
    tiempo_expiracion: Date|null,
}
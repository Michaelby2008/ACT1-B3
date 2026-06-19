import { TipoCliente, CategoriaProducto } from '../enums/ventas.enums';

export interface Cliente {
    id: string;
    nombre: string;
    tipo: TipoCliente;
}

export interface Producto {
    codigo: string;
    nombre: string;
    categoria: CategoriaProducto;
    precio: number;
    existencia: number;
}
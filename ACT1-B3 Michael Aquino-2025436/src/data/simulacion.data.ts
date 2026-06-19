import { TipoCliente, CategoriaProducto } from '../enums/ventas.enums';

export const clientesSimulados: any[] = [
    { id: "C01", nombre: "Carlos Mendoza", tipo: TipoCliente.VIP }, // BIEN
    { id: "C02", nombre: "", tipo: "TIPO_FALSO" } // MAL: Nombre vacío y tipo no existe
];

export const productosSimulados: any[] = [
    { codigo: "P01", nombre: "Laptop", categoria: CategoriaProducto.TECNOLOGIA, precio: 500, existencia: 10 }, // BIEN
    { codigo: "P02", nombre: "Silla", categoria: CategoriaProducto.HOGAR, precio: -20, existencia: -5 } // MAL: Precio y stock negativos
];
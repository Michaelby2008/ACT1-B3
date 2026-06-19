import { TipoCliente, CategoriaProducto } from '../enums/ventas.enums';

// Revisa un cliente y devuelve el texto del error, o un mensaje de éxito
export function validarCliente(c: any): string {
    if (c.nombre === "") {
        return "ERROR: El nombre está vacío.";
    }
    if (c.tipo !== TipoCliente.REGULAR && c.tipo !== TipoCliente.CORPORATIVO && c.tipo !== TipoCliente.VIP) {
        return `ERROR: El tipo '${c.tipo}' no es válido.`;
    }
    return "Cliente correcto.";
}

// Revisa un producto y devuelve el texto del error, o un mensaje de éxito
export function validarProducto(p: any): string {
    if (p.precio <= 0) {
        return "ERROR: El precio debe ser mayor a 0.";
    }
    if (p.existencia < 0) {
        return "ERROR: La existencia no puede ser negativa.";
    }
    return "Producto correcto.";
}
import { clientesSimulados, productosSimulados } from './data/simulacion.data';
import { validarCliente, validarProducto } from './validators/ventas.validator';

console.log("--- REVISANDO CLIENTES ---");
clientesSimulados.forEach(c => {
    console.log(`Cliente ${c.id}: ${validarCliente(c)}`);
});

console.log("\n--- REVISANDO PRODUCTOS ---");
productosSimulados.forEach(p => {
    console.log(`Producto ${p.nombre}: ${validarProducto(p)}`);
});
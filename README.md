# ACT1-B3
En esta actividad hare una conexion entre interfaces y enums sobre una venta de productos


# Actividad 1: Modelado de Cliente y Producto con TypeScript

Este proyecto es una simulación de un sistema de ventas. Su objetivo es revisar que los datos de los clientes y de los productos estén bien escritos antes de guardarlos.

Estudiante: Michael Yohardi Aquino Argueta
Carnet: 2025436
Institución: Fundación Kinal

## 1. Cómo se hizo el diseño (Interfaces y Enums)

Para ordenar la información de la aplicación, usamos dos herramientas de TypeScript:

- **Interfaces (Moldes):** Creamos una interfaz para Cliente y otra para Producto[cite: 1]. Esto sirve como un molde obligatorio para que todos los registros tengan los mismos datos básicos (como ID, nombre y precio).
- **Enumeraciones (Enums):** Sirven para crear listas de opciones fijas. Por ejemplo, para el tipo de cliente solo dejamos las opciones REGULAR, CORPORATIVO y VIP[cite: 1]. Así evitamos que alguien escriba un tipo de cliente que no existe.

---

## 2. Reglas de validación que aplicamos

Para asegurarnos de que no entren datos falsos o con errores al sistema, creamos funciones que revisan lo siguiente[cite: 1]:

- **Para los clientes:** El sistema obliga a que tengan un nombre (no puede quedarse vacío) y que su tipo coincida con la lista del Enum[cite: 1].
- **Para los productos:** El precio tiene que ser un número mayor a cero y la existencia en bodega no puede ser un número negativo[cite: 1].

---

## 3. Resultados de las pruebas

Pusimos datos de prueba en el código (algunos correctos y otros con errores a propósito) para ver si las validaciones funcionaban[cite: 1]. Al correr el programa en la consola, estos fueron los resultados:

- **Casos correctos:** El primer cliente y el primer producto pasaron sin problemas porque tenían todos sus datos en orden.
- **Casos con error:** El sistema detectó con éxito que el segundo cliente no tenía nombre. También detectó que el segundo producto falló porque su precio era negativo.
## 4. Conclusión

Separar el código en archivos y carpetas nos ayuda a que el proyecto sea ordenado. Aprendimos que TypeScript nos ayuda a estructurar los datos cuando programamos, pero las validaciones con condiciones (usando "if") son las que realmente detienen los errores cuando se meten datos equivocados en la aplicación[cite: 1].

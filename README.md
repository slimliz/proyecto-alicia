# Desafío: Alicia en el País de las Maravillas

## 🔗 Enlaces de entrega

- **Página publicada:** 
- **Repositorio Git:** 
- **Video explicativo:** 

## 📁 Estructura del proyecto
proyecto-alicia
- index.html
- README.md
- css
  - estilos.css
- js
  - ejercicio1.js
  - ejercicio2.js
  - ejercicio3.js

## ▶️ Cómo ejecutar

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno (Chrome, Firefox o Edge).
3. Completa los formularios de cada sección y presiona el botón correspondiente.

## 📚 Explicación del código

### Ejercicio 1 — La poción mágica
- **Entradas:** altura inicial (cm) y cantidad de poción (ml).
- **Regla:** `nuevaAltura = altura + (poción × 0.8)`. La puerta mide 120 cm.
- **Estructuras:** `if / else if / else` para validar y decidir si pasa.
- **Funciones propias:** `calcularNuevaAltura()` y `evaluarPuerta()`.

### Ejercicio 2 — La merienda del Sombrerero
- **Entradas:** nombre, tipo de bebida (4 opciones) y cantidad de tazas.
- **Estructuras:** `switch` para obtener el precio y el nombre de la bebida.
- **Descuento:** 10% si el subtotal supera 10.00 chelines.
- **Funciones propias:** `obtenerPrecio()` y `obtenerNombreBebida()`.

### Ejercicio 3 — El desafío de la Reina
- **Entrada:** número entero positivo (1 a 50).
- **Estructura:** `for` para recorrer del 1 al número ingresado.
- **Funcionalidad:** clasifica en pares/impares, cuenta y suma cada grupo,
  e indica cuál tiene mayor suma (o empate).

### Conceptos aplicados
- `let` y `const` para declarar variables.
- `if / else if / else` para condicionales.
- `switch` para selección múltiple.
- `for` para repetición.
- Funciones propias para organizar la lógica.
- `document.getElementById().value` para leer campos.
- `textContent` para mostrar resultados.
- `addEventListener("submit", ...)` y `preventDefault()` para manejar el envío.
- Validaciones: campos vacíos, rangos, valores no numéricos.

## 🧪 Tabla de pruebas

### Ejercicio 1

| # | Entrada (altura, poción) | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | 100 cm, 50 ml | Nueva altura 140 cm → No puede pasar | ✅ Coincide |
| 2 | 100 cm, 0 ml | Nueva altura 100 cm → Puede pasar | ✅ Coincide |
| 3 | 0 cm, 10 ml | Error: altura debe ser > 0 | ✅ Coincide |
| 4 | 100 cm, 150 ml | Error: poción fuera de rango (0–100) | ✅ Coincide |
| 5 | 120 cm, 0 ml | Nueva altura 120 cm → Puede pasar (caso límite) | ✅ Coincide |

### Ejercicio 2

| # | Entrada (nombre, bebida, tazas) | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Alicia, Té, 5 | Subtotal 7.50 s, descuento 0 s, total 7.50 s | ✅ Coincide |
| 2 | Sombrerero, Café, 6 | Subtotal 12.00 s, descuento 1.20 s, total 10.80 s | ✅ Coincide |
| 3 | (vacío), Café, 3 | Error: falta el nombre | ✅ Coincide |
| 4 | Reina, Chocolate, 0 | Error: cantidad fuera de rango (1–10) | ✅ Coincide |
| 5 | Conejo, Jugo de Naranja, 3.5 | Error: la cantidad debe ser entera | ✅ Coincide |

### Ejercicio 3

| # | Entrada (cartas) | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | 5 | Pares=2 (suma 6), Impares=3 (suma 9) → gana IMPAR | ✅ Coincide |
| 2 | 1 | Pares=0 (suma 0), Impares=1 (suma 1) → gana IMPAR | ✅ Coincide |
| 3 | 4 | Pares=2 (suma 6), Impares=2 (suma 4) → gana PAR | ✅ Coincide |
| 4 | 0 | Error: debe ser mayor o igual a 1 | ✅ Coincide |
| 5 | 51 | Error: excede el máximo de 50 | ✅ Coincide |

## 📸 Capturas

// Ejercicio 2: La merienda del Sombrerero Loco
// Estructuras: switch + condicional

const MAX_TAZAS = 10;
const UMBRAL_DESCUENTO = 10.00;
const PORCENTAJE_DESCUENTO = 0.10; // 10%

const form2 = document.getElementById("form2");
const resultado2 = document.getElementById("resultado2");

form2.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // 1) Leer datos
  const nombre = document.getElementById("nombre").value.trim();
  const bebida = document.getElementById("bebida").value;
  const tazasTexto = document.getElementById("tazas").value;

  // 2) Validaciones
  if (nombre === "") {
    mostrarError2("Advertencia: Debes ingresar el nombre del invitado.");
    return;
  }

  if (bebida === "") {
    mostrarError2("Advertencia: Debes seleccionar una bebida.");
    return;
  }

  if (tazasTexto === "") {
    mostrarError2("Advertencia: Debes indicar la cantidad de tazas.");
    return;
  }

  const tazas = Number(tazasTexto);
  if (!Number.isInteger(tazas) || tazas < 1 || tazas > MAX_TAZAS) {
    mostrarError2("Advertencia: La cantidad de tazas debe ser un entero entre 1 y " + MAX_TAZAS + ".");
    return;
  }

  // 3) Obtener precio con switch
  const precioUnitario = obtenerPrecio(bebida);
  if (precioUnitario === 0) {
    mostrarError2("Advertencia: La bebida seleccionada no es válida.");
    return;
  }

  const nombreBebida = obtenerNombreBebida(bebida);

  // 4) Cálculos
  const subtotal = precioUnitario * tazas;
  const descuento = subtotal > UMBRAL_DESCUENTO ? subtotal * PORCENTAJE_DESCUENTO : 0;
  const total = subtotal - descuento;

  // 5) Mostrar resultado
  resultado2.textContent =
    "Invitado: " + nombre + "\n" +
    "Bebida: " + nombreBebida + "\n" +
    "Cantidad: " + tazas + " taza(s)\n" +
    "Precio unitario: " + precioUnitario.toFixed(2) + "\n" +
    "Subtotal: " + subtotal.toFixed(2) + "\n" +
    "Descuento (10% si subtotal > 10 s): -" + descuento.toFixed(2) + "\n" +
    "TOTAL A PAGAR: s " + total.toFixed(2);
  resultado2.className = "resultado exito";
});

// Función propia con switch: precio según bebida
function obtenerPrecio(bebida) {
  switch (bebida) {
    case "te":        return 1.50;
    case "cafe":      return 2.00;
    case "chocolate": return 2.25;
    case "jugo de naranja":  return 1.25;
    default:          return 0;
  }
}

// Función propia con switch: nombre visible
function obtenerNombreBebida(bebida) {
  switch (bebida) {
    case "te":        return "Té";
    case "cafe":      return "Café";
    case "chocolate": return "Chocolate caliente";
    case "jugo de naranja":  return "Jugo de Naranja";
    default:          return "Desconocida";
  }
}

function mostrarError2(mensaje) {
  resultado2.textContent = mensaje;
  resultado2.className = "resultado error";
}
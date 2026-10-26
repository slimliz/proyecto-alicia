// Ejercicio 1: La poción mágica de Alicia
// Estructuras: secuencial y condicional (if / else if / else)

const PUERTA_CM = 120;        // altura fija de la puerta
const POCION_MIN = 0;         // rango permitido
const POCION_MAX = 100;
const FACTOR_POCION = 0.8;    // cada ml de poción añade 0.8 cm

const form1 = document.getElementById("form1");
const resultado1 = document.getElementById("resultado1");

form1.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  // 1) Leer datos como texto
  const alturaTexto = document.getElementById("altura").value;
  const pocionTexto = document.getElementById("pocion").value;

  // 2) Validar campos vacíos
  if (alturaTexto === "" || pocionTexto === "") {
    mostrarError1("Advertencia: Debes completar la altura y la cantidad de poción.");
    return;
  }

  // 3) Convertir a número
  const altura = parseFloat(alturaTexto);
  const pocion = parseFloat(pocionTexto);

  if (isNaN(altura) || isNaN(pocion)) {
    mostrarError1("Advertencia: Los valores deben ser numéricos.");
    return;
  }

  // 4) Validar rangos
  if (altura <= 0) {
    mostrarError1("Advertencia: La altura debe ser mayor que 0 cm.");
    return;
  }

  if (pocion < POCION_MIN || pocion > POCION_MAX) {
    mostrarError1("Advertencia: La poción debe estar entre " + POCION_MIN + " y " + POCION_MAX + " ml.");
    return;
  }

  // 5) Calcular nueva altura
  const nuevaAltura = calcularNuevaAltura(altura, pocion);

  // 6) Evaluar si puede pasar
  const veredicto = evaluarPuerta(nuevaAltura);

  // 7) Mostrar resultado
  resultado1.textContent =
    "Altura inicial: " + altura.toFixed(2) + " cm\n" +
    "Poción consumida: " + pocion.toFixed(2) + " ml\n" +
    "Nueva altura: " + nuevaAltura.toFixed(2) + " cm\n" +
    "Altura de la puerta: " + PUERTA_CM + " cm\n\n" +
    "Resultado: " + veredicto;
  resultado1.className = "resultado exito";
});

// Función propia: aplica la regla matemática
function calcularNuevaAltura(altura, pocion) {
  return altura + (pocion * FACTOR_POCION);
}

// Función propia: decide si pasa o no
function evaluarPuerta(altura) {
  if (altura <= PUERTA_CM) {
    return " Alicia PUEDE atravesar la puerta.";
  } else {
    return " Alicia NO puede atravesar la puerta (es demasiado alta).";
  }
}

// Función auxiliar para mostrar errores
function mostrarError1(mensaje) {
  resultado1.textContent = mensaje;
  resultado1.className = "resultado error";
}
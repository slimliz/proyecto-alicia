// Ejercicio 3: El desafío de la Reina de Corazones
// Estructuras: repetitiva (for) y condicional

const MAX_CARTAS = 50;

const form3 = document.getElementById("form3");
const resultado3 = document.getElementById("resultado3");

form3.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // 1) Leer y validar
  const texto = document.getElementById("cartas").value;
  if (texto === "") {
    mostrarError3("Advertencia: Debes indicar la cantidad de cartas.");
    return;
  }

  const n = Number(texto);
  if (!Number.isInteger(n) || n < 1 || n > MAX_CARTAS) {
    mostrarError3("Advertencia: Debes ingresar un entero entre 1 y " + MAX_CARTAS + ".");
    return;
  }

  // 2) Recorrer con for y clasificar
  const partes = [];
  let pares = 0;
  let impares = 0;
  let sumaPares = 0;
  let sumaImpares = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      pares++;
      sumaPares += i;
      partes.push(i + " (par)");
    } else {
      impares++;
      sumaImpares += i;
      partes.push(i + " (impar)");
    }
  }

  // 3) Determinar grupo con mayor suma
  let conclusion;
  if (sumaPares > sumaImpares) {
    conclusion = " El grupo PAR tiene la mayor suma.";
  } else if (sumaImpares > sumaPares) {
    conclusion = " El grupo IMPAR tiene la mayor suma.";
  } else {
    conclusion = " ¡Empate! Ambos grupos suman lo mismo.";
  }

  // 4) Mostrar resultado
  resultado3.textContent =
    "Cantidad de cartas: " + n + "\n\n" +
    "Secuencia analizada:\n" + partes.join(", ") + "\n\n" +
    "PARES: " + pares + " carta(s) — suma = " + sumaPares + "\n" +
    "IMPARES: " + impares + " carta(s) — suma = " + sumaImpares + "\n\n" +
    conclusion;
  resultado3.className = "resultado exito";
});

function mostrarError3(mensaje) {
  resultado3.textContent = mensaje;
  resultado3.className = "resultado error";
}
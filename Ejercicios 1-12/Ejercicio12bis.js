const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nivel = 0;
let maxIntentos = 0;
let rangoNumeros = {min: 1, max: 10};

const adivinarNumero = () => {
  const numeroAleatorio = Math.floor(Math.random() * (rangoNumeros.max - rangoNumeros.min + 1)) + rangoNumeros.min;
  let contadorIntentos = 0;

  console.log(`Adivina un número entre ${rangoNumeros.min} y ${rangoNumeros.max}`);
  console.log(`Tienes ${maxIntentos} intentos`);

  const preguntarNumero = () => {
    rl.question("Ingresa un número: ", (numeroIngresado) => {
      numeroIngresado = parseInt(numeroIngresado);

      if (numeroIngresado === numeroAleatorio) {
        console.log("¡Acertaste!");
        rl.close();
      } else if (numeroIngresado < numeroAleatorio) {
        console.log("El número es mayor");
        contadorIntentos++;
      } else {
        console.log("El número es menor");
        contadorIntentos++;
      }

      if (contadorIntentos === maxIntentos) {
        console.log(`¡Lo siento, no acertaste! El número era ${numeroAleatorio}`);
        rl.close();
      } else {
        preguntarNumero();
      }
    });
  }

  preguntarNumero();
}

console.log("Bienvenido al juego de adivinar el número");

rl.question("Selecciona el nivel de dificultad (1, 2 o 3): ", (opcion) => {
  nivel = parseInt(opcion);

  switch (nivel) {
    case 1:
      maxIntentos = 5;
      rangoNumeros = {min: 1, max: 10};
      break;
    case 2:
      maxIntentos = 3;
      rangoNumeros = {min: 1, max: 50};
      break;
    case 3:
      maxIntentos = 1;
      rangoNumeros = {min: 1, max: 100};
      break;
    default:
      console.log("Opción no válida");
      rl.close();
      break;
  }

  if (nivel >= 1 && nivel <= 3) {
    adivinarNumero();
  }
});

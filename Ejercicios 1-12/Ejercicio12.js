const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

const maxIntentos = 3;

let contadorIntentos = 0;

const adivinarNumero = () => {
  rl.question("Ingresa un número entre 1 y 10: ", (numeroIngresado) => {
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
      adivinarNumero();
    }
  });
}

adivinarNumero();

function calcularDiasCrecimiento() {
  const velocidadCrecimiento = parseInt(process.argv[2]);
  const velocidadDecrecimiento = parseInt(process.argv[3]);
  const alturaDeseada = parseInt(process.argv[4]);

  let alturaActual = 15;
  let dias = 56;

  while (alturaActual < alturaDeseada) {
    dias++;
    alturaActual += velocidadCrecimiento;
    if (alturaActual < alturaDeseada) {
      alturaActual -= velocidadDecrecimiento;
    }
  }

  return dias;
}

console.log(`La planta tardará ${calcularDiasCrecimiento()} días en alcanzar la altura deseada.`);


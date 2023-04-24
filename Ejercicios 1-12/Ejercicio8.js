function sumar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
  }
  console.log(sumar(1, 2, 3, 4)); 
  
  console.log(sumar(5)); 
  console.log(sumar(10, 30, 30, 40, 50)); 
  console.log(sumar()); 
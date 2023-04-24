function palabraMasLarga(str) {
  const words = str.split(' ');
  let maxLen = 0;
  let longestWord = '';
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLen) {
      maxLen = words[i].length;
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

function primeraMayuscula(str) {
  const words = str.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0);
    words[i] = firstLetter.toUpperCase() + words[i].substring(1);
  }
  
  return words.join(' ');
}

console.log(palabraMasLarga('Erase una vez que se era')); // 'Erase'
console.log(primeraMayuscula('hola a todos que tal')); // 'Hola A Todos Que Tal'

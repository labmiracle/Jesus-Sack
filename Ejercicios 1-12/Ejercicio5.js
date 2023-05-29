function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, char) {
    return char.toUpperCase();
  }).replace(/\s/g, '');
}

console.log(camelize('hola a todos que tal')); // holaATodosQueTal

  
function onlyUniques(...args) {
    return [...new Set(args)];
  }
  
  console.log(onlyUniques(1, 2, 3, 3, 4, 4, 4, 5)); 
  console.log(onlyUniques('a', 'b', 'c', 'c', 'd', 'd', 'd', 'e'));
  
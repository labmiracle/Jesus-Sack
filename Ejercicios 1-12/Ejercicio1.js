function golfScore(par, strokes) {
    const names = [
      "Hole-in-one!",
      "Eagle",
      "Birdie",
      "Par",
      "Bogey",
      "Double Bogey",
      "Go Home!",
    ];
    let index = 0;
    if (strokes === 1) {
      index = 0;
    } else if (strokes <= par - 2) {
      index = 1;
    } else if (strokes === par - 1) {
      index = 2;
    } else if (strokes === par) {
      index = 3;
    } else if (strokes === par + 1) {
      index = 4;
    } else if (strokes === par + 2) {
      index = 5;
    } else {
      index = 6;
    }
    return names[index];
  }
  
  
  console.log(golfScore(6, 3)); 
  
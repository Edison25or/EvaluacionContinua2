function Cuadrilatero(a, b) {
  for (let i = 0; i < a; i++) {
    let linea = '';
    for (let j = 0; j < b; j++) {
      if (i === 0 || i === a - 1 || j === 0 || j === b - 1) {
        linea += '*';
      } else {
        linea += ' ';
      }
    }
    console.log(linea);
  }
}

Cuadrilatero(4, 6);

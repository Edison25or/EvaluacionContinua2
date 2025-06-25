const calculaSueldo = (cantHoras, cantHExtras, cantFaltas) => {
  return cantHoras * 30 + cantHExtras * 31 - cantFaltas * 30;
};

console.log(calculaSueldo(8, 2, 1)); 

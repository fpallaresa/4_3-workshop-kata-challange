/*
        KATA 2 - Múltiplos de 3 y de 5
        
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/


function numbers(str) {
    let counter = 0;
  
    for (let i = 0; i < str; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        counter += i;
      }
    }
    return counter;
  }
  
  let x = 16;
  console.log(numbers(x));
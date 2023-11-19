/* 
        KATA 8 - Etiquetas de vehículos
        
        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/ 

function labelCars(cars) {

  for (let i = 0; i < cars.length; i++) {

    cars[i].etiqueta = '';
    console.log(cars[i].etiqueta);
    if (cars[i].modelo === 'híbrido') {
      cars[i].etiqueta = 'ECO';
    } else if (cars[i].modelo === 'gasolina') {
      cars[i].etiqueta = 'C';
    }
  }

  return cars;
}

let cars = [
  { id: 1, modelo: 'híbrido', matricula: '4565HLM' },
  { id: 2, modelo: 'gasolina', matricula: '5678MNL' },
  { id: 3, modelo: 'híbrido', matricula: '1111LLL' }
];

console.log(labelCars(cars));

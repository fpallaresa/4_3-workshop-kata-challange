/*
    KATA 5 - Concatenar arrays
    
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

function argumentSort (str) {
    
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result = result.concat(str[i]);
    }
    result.sort();

    return result;
}

let x = ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], ['Vinicius', 'Kane']]);
console.log (argumentSort (x));
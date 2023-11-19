/* 
        KATA 6 - Slice
        
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]

*/ 


function getNewArray(element, start, end) {

        if (end === undefined) {
                end = element.length - 1;
        }

        if (start < 0 || end >= element.length || start > end) {
            console.log("no válido");
            return [];
        }
        let newElement = element.slice(start, end + 1);
    
        return newElement;
    }
    
    console.log(getNewArray([1, 2, 3,], 0, 1));
    console.log(getNewArray([1, 2, 3], 1));
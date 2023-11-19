/*
        KATA 4 - Código secreto
        
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/



function replaceByPosition(str) { 

        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < str.length; i++) {
                let character = str[i];

                if (alphabet.includes(character)) {
                        
                        let position = alphabet.indexOf(character) + 1;
                        result += position.toString();
                         
                } else if (character === ' ') {
                        result += ' ';
                }

        }
        return result;
}

let results = replaceByPosition("hola caracola");
console.log(results); 

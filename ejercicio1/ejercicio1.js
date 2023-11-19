/*
        KATA 1 - Contador de vocales
        
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

function Vowels(str) {
        let counterVowels = 0;                                                 
        let allVowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];     
        let characters = str.split('');                                         
      
          for (let i = 0; i < characters.length; i++) {                       
                if (allVowels.includes(characters[i])) {                      
                counterVowels++;
                }
        }
        return counterVowels;
}
      
const sentence = 'qué tal, cómo te va hermano';
console.log(Vowels(sentence));
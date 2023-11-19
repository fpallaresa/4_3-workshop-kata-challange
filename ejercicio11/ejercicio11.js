/* 
    KATA 11 - Mueve los 0 al final
    
    Crea una función que reciba un listado y mueva todos los 0 al final, 
    manteniendo el orden del resto de elementos.

    Ejemplo:
       Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
       Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/ 


function listSort(element) {

    for (let i = 0; i < element.length; i++) {
        if (element[i] === 0) {
            element.splice(i, 1);
            element.push(0);
        }
    }
    return element;
}

let listContent = [1, 0, true, 0, 'hola', 5, 30, 'a'];
console.log(listSort(listContent));
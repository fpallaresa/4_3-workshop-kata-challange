/* 
        KATA 9 - Ordenación de un array según la propiedad
        
        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Lego’, categoria:’construcción’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

            Salida:
                    [{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }
                    {nombre: ‘Lego’, categoria:’construcción’ }]
*/ 



function sortGifts(gifts, feature) {

        gifts.sort(
                function (a, b) {

                        if (a[feature] < b[feature]) {
                        return -1;
                        } else if (a[feature] > b[feature]) {
                        return 1;
                        } else {
                        return 0;
                        }
        });
      
        return gifts;
}
      
let listGifts = [
        { nombre: 'Barbie', categoria: 'muñecas' },
        { nombre: 'Lego', categoria: 'construcción' },
        { nombre: 'Fifa2023', categoria: 'videojuego' }
      ];
      
console.log(sortGifts(listGifts, 'nombre'));
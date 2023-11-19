/* 
        KATA 10 - Monopoli: ¿Quién tiene más dinero?
        
        Crea una función que reciba un listado de jugadores con el número de 
        billetes de cada cantidad que tienen y devuelva el jugador con más dinero. 

        No habrá más de un jugador que tenga el mayor número de billetes

        Ejemplo:
       Entrada:
            [{nombre: ‘Pedro’, billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
            {nombre: ‘Luis’, billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
                {nombre: ‘Gon’, , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

            Salida:
                Gon
*/ 


function playerWithMoney(element) {
    let maxMoney = 0;
    let playerMaxMoney = null;

    for (let i = 0; i < element.length; i++) {
        let player = element[i];
        let totalDinero = player.billetesDe5 * 5 + player.billetesDe10 * 10 + player.billetestDe50 * 50;

        if (totalDinero > maxMoney) {
            maxMoney = totalDinero;
            playerMaxMoney = player;
        }
    }

    return playerMaxMoney;
}

let players = [
    { nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
    { nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
    { nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 }
];

let playerWithMoneyResult = playerWithMoney(players);
console.log(playerWithMoneyResult.nombre);

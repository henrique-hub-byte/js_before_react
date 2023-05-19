function soma(...numeros) {
    return numeros.reduce((num, total) => num + total)
}

console.log(soma(10,10,10,10,10,10))
/* ++++++++++++++++++++++++++++++ */
function showCar(oldCar, newCar){
    console.log({oldCar, newCar})
}

showCar('Celta', 'ferrari', 'velar', 'mustang')
 
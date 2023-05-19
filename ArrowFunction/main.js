const nomes = [
    'Evka',
    'Monique',
    'Dani...',
    'Mila',
    'Korolova',
]
/* const resNames = nomes.map(function(nomes) {
    return nomes.length
}) */
/* const resNames = nomes.map((nomes) => {
    return nomes.length
}) */
const resNames = nomes.map(nomes  => nomes.length) 
/* quantidade de caractere */
console.log(resNames)

console.log('888888888888888888888888888888888888')
const soma = (n1 , n2) => {
    return n1 + n2
}

console.log(soma(5,5))
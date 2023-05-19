const numeros = [1,2,3,4]

//map
 const map = numeros.map((numero) => {
    return numero + 50
 })
/* somou */
 console.log(map)
 console.log('*****************************************')
//filter
const programdoresCanditados = [
    {nome: 'Gabriel', idade: 16, tecnologia : 'React'},
    {nome: 'Ronaldo', idade: 25, tecnologia : 'Vue'},
    {nome: 'Diego', idade: 26, tecnologia : 'Node'},
    {nome: 'José', idade: 30, tecnologia : 'php'},
    {nome: 'Luis', idade: 25, tecnologia : 'php'}
]

const filter = programdoresCanditados.filter((canditado) => {
    return canditado.tecnologia === 'php' &&  canditado.idade < 30
}) 

console.log(filter)
//reduce
console.log('*--------------------------------------')
const reduce = numeros.reduce((numeros, x) => {
    return numeros + x
})
console.log(reduce + 5)




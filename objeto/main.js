let xicara = {
    car: "branco",
    tamanho: "pequeno",
    doQue: "café",
    xicaraEmCimaDoPrato :1
} 

xicara.tempo = 'velho'

console.log(xicara)

console.log(xicara.cor != 'branco '? 'pq não negro ou asiatico,indio racista!!' : 'ta suave');
delete xicara.doQue

console.log(xicara)
console.log('**************** outro objeto ********************')
let canditado  = {
    nome : "Monique",
    idade : 16,
    cargo : "junior"
}

canditado.tecnologias = ['ReactJs', 'Javascript', 'html', 'css']



canditado.redeSociais = {
    instagram: "um instagram",
    linkedin: "um linkedin",
    github: "um github",
}

canditado.interessesEmAprender = {
    linguagens : ['typescript', 'python', 'c#'],
    framework : ['Nextjs', 'Reactjs', '.NET']
}
console.log(canditado)
console.log('**************** outro objeto 2 ********************')
let calculo = {
    calsoma: function (n1 , n2 ){
        return n1 + n2 ;
    }
}

console.log(calculo.calsoma(8,9))
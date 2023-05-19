let info = {
    nome: 'Evka',
    idade: 30,
    redesSociais: {
        instagram: "instagram",
        facebook: "facebook",
        redesSociaisProfissionais: {
            linkedin: "linkedin",
            github: "github",
            /* redesSociaisCanal: {
                instagram: "instagram 2"
            } */
        }
    }
}

console.log(info?.redesSociais?.redesSociaisProfissionais?.redesSociaisCanal?.instagram || 'não conseguimos achar o instagram')
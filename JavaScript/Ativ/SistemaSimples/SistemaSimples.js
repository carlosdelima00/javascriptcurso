// Construir uma aplicação em que peça senha e se tem permissao de usuario
let Adm1 = null
let Adm2 = null
const Adms = [
    Adm1 = 
    {
        NomeUser: "carlos"
    },
    Adm2 = 
    {
        NomeUser: "léo"
    }
]
console.log("---------------------------")
console.log("Bem-vindo")
console.log("---------------------------")
console.log("quem irá usar este computador?")
let Nome = "carlos"
console.log("olá",Nome)
console.log(Nome!==Adm1.NomeUser ||Nome!==Adm2.NomeUser  ?"compre e venda":"")
if(Nome === Adm1.NomeUser || Nome === Adm2.user ){
    console.log("olá",Nome,"você ira adcionar um novo Adm")
    var AddNewAdm = "Rodolfo"
    var Adm3 = {
        NomeUser: AddNewAdm
    }
    Adms.push(Adm3)
}
console.log(Adms)
